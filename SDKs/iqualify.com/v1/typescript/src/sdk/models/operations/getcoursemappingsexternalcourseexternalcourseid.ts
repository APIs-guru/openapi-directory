import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCourseMappingsExternalcourseExternalCourseIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalCourseId" })
  externalCourseId: string;
}


export class GetCourseMappingsExternalcourseExternalCourseIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCourseMappingsExternalcourseExternalCourseIdPathParams;
}


export class GetCourseMappingsExternalcourseExternalCourseIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  getCourseMappingsExternalcourseExternalCourseId200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
