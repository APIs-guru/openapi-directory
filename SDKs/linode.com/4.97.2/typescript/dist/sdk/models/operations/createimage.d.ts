import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateImageSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateImageDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateImageRequest extends SpeakeasyBase {
    request?: any;
    security: CreateImageSecurity;
}
export declare class CreateImageResponse extends SpeakeasyBase {
    contentType: string;
    imagePrivate?: shared.ImagePrivate;
    statusCode: number;
    createImageDefaultApplicationJsonObject?: CreateImageDefaultApplicationJson;
}
