import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCoursesContentIdMetadataTagsPathParams extends SpeakeasyBase {
    contentId: string;
}
export declare class PutCoursesContentIdMetadataTagsRequestBody extends SpeakeasyBase {
    tags?: string[];
}
export declare class PutCoursesContentIdMetadataTagsRequest extends SpeakeasyBase {
    pathParams: PutCoursesContentIdMetadataTagsPathParams;
    request: PutCoursesContentIdMetadataTagsRequestBody;
}
export declare class PutCoursesContentIdMetadataTagsResponse extends SpeakeasyBase {
    contentType: string;
    courseMetaResponse?: shared.CourseMetaResponse;
    error?: shared.Error;
    statusCode: number;
}
