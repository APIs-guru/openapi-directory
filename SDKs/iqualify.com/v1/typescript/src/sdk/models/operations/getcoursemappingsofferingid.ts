import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCourseMappingsOfferingIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetCourseMappingsOfferingIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCourseMappingsOfferingIdPathParams;
}


export class GetCourseMappingsOfferingIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  getCourseMappingsOfferingId200ApplicationJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
