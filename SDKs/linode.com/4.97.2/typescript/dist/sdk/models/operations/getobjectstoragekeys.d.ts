import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetObjectStorageKeysServerList: readonly ["https://api.linode.com/v4"];
export declare class GetObjectStorageKeysSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetObjectStorageKeys200ApplicationJson extends SpeakeasyBase {
    data?: shared.ObjectStorageKey[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetObjectStorageKeysDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetObjectStorageKeysRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: GetObjectStorageKeysSecurity;
}
export declare class GetObjectStorageKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getObjectStorageKeys200ApplicationJsonObject?: GetObjectStorageKeys200ApplicationJson;
    getObjectStorageKeysDefaultApplicationJsonObject?: GetObjectStorageKeysDefaultApplicationJson;
}
