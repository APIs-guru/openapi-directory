import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUserImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    userId: string;
}
export declare class PostUserImageQueryParams extends SpeakeasyBase {
    index?: number;
}
export declare class PostUserImageSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PostUserImageRequest extends SpeakeasyBase {
    pathParams: PostUserImagePathParams;
    queryParams: PostUserImageQueryParams;
    security: PostUserImageSecurity;
}
export declare class PostUserImageResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
