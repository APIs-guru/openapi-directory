import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetObjectStorageKeyServerList: readonly ["https://api.linode.com/v4"];
export declare class GetObjectStorageKeyPathParams extends SpeakeasyBase {
    keyId: number;
}
export declare class GetObjectStorageKeySecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetObjectStorageKeyDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetObjectStorageKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetObjectStorageKeyPathParams;
    security: GetObjectStorageKeySecurity;
}
export declare class GetObjectStorageKeyResponse extends SpeakeasyBase {
    contentType: string;
    objectStorageKey?: shared.ObjectStorageKey;
    statusCode: number;
    getObjectStorageKeyDefaultApplicationJsonObject?: GetObjectStorageKeyDefaultApplicationJson;
}
