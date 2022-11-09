import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCourseMappingsOfferingIdExternalCourseIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalCourseId" })
  externalCourseId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class DeleteCourseMappingsOfferingIdExternalCourseIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCourseMappingsOfferingIdExternalCourseIdPathParams;
}


export class DeleteCourseMappingsOfferingIdExternalCourseIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCourseMappingsOfferingIdExternalCourseId200ApplicationJsonStrings?: string[];

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
