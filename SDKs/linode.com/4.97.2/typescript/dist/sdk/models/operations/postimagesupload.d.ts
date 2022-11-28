import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const PostImagesUploadServerList: readonly ["https://api.linode.com/v4", "https://api.linode.com/v4beta"];
export declare class PostImagesUploadRequestBody extends SpeakeasyBase {
    description?: string;
    label: string;
    region: string;
}
export declare class PostImagesUploadSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class PostImagesUpload200ApplicationJson extends SpeakeasyBase {
    image?: shared.ImagePrivate;
    uploadTo?: string;
}
export declare class PostImagesUploadDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class PostImagesUploadRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: PostImagesUploadRequestBody;
    security: PostImagesUploadSecurity;
}
export declare class PostImagesUploadResponse extends SpeakeasyBase {
    contentType: string;
    postImagesUpload200ApplicationJsonObject?: PostImagesUpload200ApplicationJson;
    postImagesUploadDefaultApplicationJsonObject?: PostImagesUploadDefaultApplicationJson;
    statusCode: number;
}
