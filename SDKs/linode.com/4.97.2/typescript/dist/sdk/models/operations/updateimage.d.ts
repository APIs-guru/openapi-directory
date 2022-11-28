import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateImagePathParams extends SpeakeasyBase {
    imageId: string;
}
export declare class UpdateImageSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateImageDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateImageRequest extends SpeakeasyBase {
    pathParams: UpdateImagePathParams;
    request: shared.ImagePrivateInput;
    security: UpdateImageSecurity;
}
export declare class UpdateImageResponse extends SpeakeasyBase {
    contentType: string;
    imagePrivate?: shared.ImagePrivate;
    statusCode: number;
    updateImageDefaultApplicationJsonObject?: UpdateImageDefaultApplicationJson;
}
