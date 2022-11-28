import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteObjectStorageKeyServerList: readonly ["https://api.linode.com/v4"];
export declare class DeleteObjectStorageKeyPathParams extends SpeakeasyBase {
    keyId: number;
}
export declare class DeleteObjectStorageKeySecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteObjectStorageKeyDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteObjectStorageKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteObjectStorageKeyPathParams;
    security: DeleteObjectStorageKeySecurity;
}
export declare class DeleteObjectStorageKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteObjectStorageKey200ApplicationJsonObject?: Map<string, any>;
    deleteObjectStorageKeyDefaultApplicationJsonObject?: DeleteObjectStorageKeyDefaultApplicationJson;
}
