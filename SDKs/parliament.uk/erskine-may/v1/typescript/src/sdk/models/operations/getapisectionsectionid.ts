import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiSectionSectionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sectionId" })
  sectionId: number;
}


export class GetApiSectionSectionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiSectionSectionIdPathParams;
}


export class GetApiSectionSectionIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  erskineMaySectionDetail?: shared.ErskineMaySectionDetail;

  @Metadata()
  statusCode: number;
}
