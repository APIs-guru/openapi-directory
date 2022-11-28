import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCoursesContentIdMetadataCategoryPathParams extends SpeakeasyBase {
    contentId: string;
}
export declare class PutCoursesContentIdMetadataCategoryRequestBody extends SpeakeasyBase {
    category?: string;
}
export declare class PutCoursesContentIdMetadataCategoryRequest extends SpeakeasyBase {
    pathParams: PutCoursesContentIdMetadataCategoryPathParams;
    request: PutCoursesContentIdMetadataCategoryRequestBody;
}
export declare class PutCoursesContentIdMetadataCategoryResponse extends SpeakeasyBase {
    contentType: string;
    courseMetaResponse?: shared.CourseMetaResponse;
    error?: shared.Error;
    statusCode: number;
}
