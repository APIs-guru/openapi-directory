import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetItemImagePathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    itemId: string;
}
export declare class SetItemImageSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SetItemImageRequest extends SpeakeasyBase {
    pathParams: SetItemImagePathParams;
    security: SetItemImageSecurity;
}
export declare class SetItemImageResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
