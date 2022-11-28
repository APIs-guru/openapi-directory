import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chapterNumber" })
  chapterNumber: number;
}


export class GetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPathParams;
}


export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erskineMayChapterOverview?: shared.ErskineMayChapterOverview;

  @SpeakeasyMetadata()
  statusCode: number;
}
