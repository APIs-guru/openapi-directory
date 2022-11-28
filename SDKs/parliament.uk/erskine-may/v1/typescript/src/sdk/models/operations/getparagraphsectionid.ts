import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetParagraphSectionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reference" })
  reference: string;
}


export class GetParagraphSectionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetParagraphSectionIdPathParams;
}


export class GetParagraphSectionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erskineMaySectionOverview?: shared.ErskineMaySectionOverview;

  @SpeakeasyMetadata()
  statusCode: number;
}
