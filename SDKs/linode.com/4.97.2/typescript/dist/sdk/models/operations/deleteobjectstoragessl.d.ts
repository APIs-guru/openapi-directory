import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteObjectStorageSslServerList: readonly ["https://api.linode.com/v4"];
export declare class DeleteObjectStorageSslPathParams extends SpeakeasyBase {
    bucket: string;
    clusterId: string;
}
export declare class DeleteObjectStorageSslSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteObjectStorageSslDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteObjectStorageSslRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteObjectStorageSslPathParams;
    security: DeleteObjectStorageSslSecurity;
}
export declare class DeleteObjectStorageSslResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteObjectStorageSsl200ApplicationJsonObject?: Map<string, any>;
    deleteObjectStorageSslDefaultApplicationJsonObject?: DeleteObjectStorageSslDefaultApplicationJson;
}
