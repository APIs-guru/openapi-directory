import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateObjectStorageObjectUrlServerList: readonly ["https://api.linode.com/v4"];
export declare class CreateObjectStorageObjectUrlPathParams extends SpeakeasyBase {
    bucket: string;
    clusterId: string;
}
export declare class CreateObjectStorageObjectUrlSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateObjectStorageObjectUrlDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateObjectStorageObjectUrlRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateObjectStorageObjectUrlPathParams;
    request?: any;
    security: CreateObjectStorageObjectUrlSecurity;
}
export declare class CreateObjectStorageObjectUrlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createObjectStorageObjectUrl200ApplicationJsonAny?: any;
    createObjectStorageObjectUrlDefaultApplicationJsonObject?: CreateObjectStorageObjectUrlDefaultApplicationJson;
}
