import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUserImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    userId: string;
}
export declare class DeleteUserImageQueryParams extends SpeakeasyBase {
    index?: number;
}
export declare class DeleteUserImageSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteUserImageRequest extends SpeakeasyBase {
    pathParams: DeleteUserImagePathParams;
    queryParams: DeleteUserImageQueryParams;
    security: DeleteUserImageSecurity;
}
export declare class DeleteUserImageResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
