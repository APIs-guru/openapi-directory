import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateObjectStorageKeyServerList: readonly ["https://api.linode.com/v4"];
export declare class UpdateObjectStorageKeyPathParams extends SpeakeasyBase {
    keyId: number;
}
export declare class UpdateObjectStorageKeyRequestBody extends SpeakeasyBase {
    label?: string;
}
export declare class UpdateObjectStorageKeySecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateObjectStorageKeyDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateObjectStorageKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateObjectStorageKeyPathParams;
    request?: UpdateObjectStorageKeyRequestBody;
    security: UpdateObjectStorageKeySecurity;
}
export declare class UpdateObjectStorageKeyResponse extends SpeakeasyBase {
    contentType: string;
    objectStorageKey?: shared.ObjectStorageKey;
    statusCode: number;
    updateObjectStorageKeyDefaultApplicationJsonObject?: UpdateObjectStorageKeyDefaultApplicationJson;
}
