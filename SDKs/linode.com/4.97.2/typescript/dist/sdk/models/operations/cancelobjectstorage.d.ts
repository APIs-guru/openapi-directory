import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CancelObjectStorageServerList: readonly ["https://api.linode.com/v4"];
export declare class CancelObjectStorageSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CancelObjectStorageDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CancelObjectStorageRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: CancelObjectStorageSecurity;
}
export declare class CancelObjectStorageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cancelObjectStorage200ApplicationJsonObject?: Map<string, any>;
    cancelObjectStorageDefaultApplicationJsonObject?: CancelObjectStorageDefaultApplicationJson;
}
