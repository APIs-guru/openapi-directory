import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCourseMappingsExternalcourseExternalCourseIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalCourseId" })
  externalCourseId: string;
}


export class GetCourseMappingsExternalcourseExternalCourseIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCourseMappingsExternalcourseExternalCourseIdPathParams;
}


export class GetCourseMappingsExternalcourseExternalCourseIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  getCourseMappingsExternalcourseExternalCourseId200ApplicationJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
