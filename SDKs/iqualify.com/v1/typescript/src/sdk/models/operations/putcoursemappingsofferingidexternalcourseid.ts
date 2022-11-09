import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCourseMappingsOfferingIdExternalCourseIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalCourseId" })
  externalCourseId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PutCourseMappingsOfferingIdExternalCourseIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCourseMappingsOfferingIdExternalCourseIdPathParams;
}


export class PutCourseMappingsOfferingIdExternalCourseIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  putCourseMappingsOfferingIdExternalCourseId200ApplicationJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
