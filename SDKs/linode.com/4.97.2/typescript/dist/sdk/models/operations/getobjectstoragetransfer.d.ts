import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetObjectStorageTransferServerList: readonly ["https://api.linode.com/v4"];
export declare class GetObjectStorageTransferSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetObjectStorageTransferDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetObjectStorageTransferRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: GetObjectStorageTransferSecurity;
}
export declare class GetObjectStorageTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getObjectStorageTransfer200ApplicationJsonAny?: any;
    getObjectStorageTransferDefaultApplicationJsonObject?: GetObjectStorageTransferDefaultApplicationJson;
}
