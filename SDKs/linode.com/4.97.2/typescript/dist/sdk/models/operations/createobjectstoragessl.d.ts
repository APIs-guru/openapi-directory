import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateObjectStorageSslServerList: readonly ["https://api.linode.com/v4"];
export declare class CreateObjectStorageSslPathParams extends SpeakeasyBase {
    bucket: string;
    clusterId: string;
}
export declare class CreateObjectStorageSslSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateObjectStorageSslDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateObjectStorageSslRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateObjectStorageSslPathParams;
    request?: shared.ObjectStorageSsl;
    security: CreateObjectStorageSslSecurity;
}
export declare class CreateObjectStorageSslResponse extends SpeakeasyBase {
    contentType: string;
    objectStorageSslResponse?: shared.ObjectStorageSslResponse;
    statusCode: number;
    createObjectStorageSslDefaultApplicationJsonObject?: CreateObjectStorageSslDefaultApplicationJson;
}
