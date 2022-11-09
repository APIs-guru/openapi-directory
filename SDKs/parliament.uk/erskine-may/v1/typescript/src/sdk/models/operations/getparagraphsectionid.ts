import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetParagraphSectionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reference" })
  reference: string;
}


export class GetParagraphSectionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetParagraphSectionIdPathParams;
}


export class GetParagraphSectionIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  erskineMaySectionOverview?: shared.ErskineMaySectionOverview;

  @Metadata()
  statusCode: number;
}
