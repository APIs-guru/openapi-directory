import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUserImageByIndexPathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    index: number;
    userId: string;
}
export declare class PostUserImageByIndexSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PostUserImageByIndexRequest extends SpeakeasyBase {
    pathParams: PostUserImageByIndexPathParams;
    security: PostUserImageByIndexSecurity;
}
export declare class PostUserImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
