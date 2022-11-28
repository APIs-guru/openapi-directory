import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateObjectStorageKeysServerList: readonly ["https://api.linode.com/v4"];
export declare class CreateObjectStorageKeysSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateObjectStorageKeysDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateObjectStorageKeysRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: shared.ObjectStorageKeyInput;
    security: CreateObjectStorageKeysSecurity;
}
export declare class CreateObjectStorageKeysResponse extends SpeakeasyBase {
    contentType: string;
    objectStorageKey?: shared.ObjectStorageKey;
    statusCode: number;
    createObjectStorageKeysDefaultApplicationJsonObject?: CreateObjectStorageKeysDefaultApplicationJson;
}
