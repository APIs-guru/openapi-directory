import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteImagePathParams extends SpeakeasyBase {
    imageId: string;
}
export declare class DeleteImageSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteImageDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteImageRequest extends SpeakeasyBase {
    pathParams: DeleteImagePathParams;
    security: DeleteImageSecurity;
}
export declare class DeleteImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteImage200ApplicationJsonObject?: Map<string, any>;
    deleteImageDefaultApplicationJsonObject?: DeleteImageDefaultApplicationJson;
}
