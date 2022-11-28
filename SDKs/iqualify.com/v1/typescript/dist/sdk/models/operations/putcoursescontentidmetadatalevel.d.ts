import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCoursesContentIdMetadataLevelPathParams extends SpeakeasyBase {
    contentId: string;
}
export declare class PutCoursesContentIdMetadataLevelRequestBody extends SpeakeasyBase {
    level?: string;
}
export declare class PutCoursesContentIdMetadataLevelRequest extends SpeakeasyBase {
    pathParams: PutCoursesContentIdMetadataLevelPathParams;
    request: PutCoursesContentIdMetadataLevelRequestBody;
}
export declare class PutCoursesContentIdMetadataLevelResponse extends SpeakeasyBase {
    contentType: string;
    courseMetaResponse?: shared.CourseMetaResponse;
    error?: shared.Error;
    statusCode: number;
}
