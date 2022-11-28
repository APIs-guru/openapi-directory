import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCourseMappingsOfferingIdExternalCourseIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalCourseId" })
  externalCourseId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class DeleteCourseMappingsOfferingIdExternalCourseIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCourseMappingsOfferingIdExternalCourseIdPathParams;
}


export class DeleteCourseMappingsOfferingIdExternalCourseIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteCourseMappingsOfferingIdExternalCourseId200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
