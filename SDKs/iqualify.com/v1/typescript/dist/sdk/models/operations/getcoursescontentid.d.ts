import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCoursesContentIdPathParams extends SpeakeasyBase {
    contentId: string;
}
export declare class GetCoursesContentIdRequest extends SpeakeasyBase {
    pathParams: GetCoursesContentIdPathParams;
}
export declare class GetCoursesContentIdResponse extends SpeakeasyBase {
    contentType: string;
    courseMetaResponse?: shared.CourseMetaResponse;
    error?: shared.Error;
    statusCode: number;
}
