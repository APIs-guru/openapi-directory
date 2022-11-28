import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetObjectStorageSslServerList: readonly ["https://api.linode.com/v4"];
export declare class GetObjectStorageSslPathParams extends SpeakeasyBase {
    bucket: string;
    clusterId: string;
}
export declare class GetObjectStorageSslSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetObjectStorageSslDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetObjectStorageSslRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetObjectStorageSslPathParams;
    security: GetObjectStorageSslSecurity;
}
export declare class GetObjectStorageSslResponse extends SpeakeasyBase {
    contentType: string;
    objectStorageSslResponse?: shared.ObjectStorageSslResponse;
    statusCode: number;
    getObjectStorageSslDefaultApplicationJsonObject?: GetObjectStorageSslDefaultApplicationJson;
}
