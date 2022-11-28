import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItemImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    itemId: string;
}
export declare class DeleteItemImageQueryParams extends SpeakeasyBase {
    imageIndex?: number;
}
export declare class DeleteItemImageSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteItemImageRequest extends SpeakeasyBase {
    pathParams: DeleteItemImagePathParams;
    queryParams: DeleteItemImageQueryParams;
    security: DeleteItemImageSecurity;
}
export declare class DeleteItemImageResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
