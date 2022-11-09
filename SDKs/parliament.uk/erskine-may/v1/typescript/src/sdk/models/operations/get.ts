import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chapterNumber" })
  chapterNumber: number;
}


export class GetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPathParams;
}


export class GetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  erskineMayChapterOverview?: shared.ErskineMayChapterOverview;

  @Metadata()
  statusCode: number;
}
