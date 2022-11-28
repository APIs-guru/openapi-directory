import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCoursesContentIdMetadataTopicPathParams extends SpeakeasyBase {
    contentId: string;
}
export declare class PutCoursesContentIdMetadataTopicRequestBody extends SpeakeasyBase {
    topic?: string;
}
export declare class PutCoursesContentIdMetadataTopicRequest extends SpeakeasyBase {
    pathParams: PutCoursesContentIdMetadataTopicPathParams;
    request: PutCoursesContentIdMetadataTopicRequestBody;
}
export declare class PutCoursesContentIdMetadataTopicResponse extends SpeakeasyBase {
    contentType: string;
    courseMetaResponse?: shared.CourseMetaResponse;
    error?: shared.Error;
    statusCode: number;
}
