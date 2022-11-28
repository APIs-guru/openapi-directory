import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCourseMappingsExternalcourseExternalCourseIdPathParams extends SpeakeasyBase {
    externalCourseId: string;
}
export declare class GetCourseMappingsExternalcourseExternalCourseIdRequest extends SpeakeasyBase {
    pathParams: GetCourseMappingsExternalcourseExternalCourseIdPathParams;
}
export declare class GetCourseMappingsExternalcourseExternalCourseIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    getCourseMappingsExternalcourseExternalCourseId200ApplicationJsonStrings?: string[];
    statusCode: number;
}
