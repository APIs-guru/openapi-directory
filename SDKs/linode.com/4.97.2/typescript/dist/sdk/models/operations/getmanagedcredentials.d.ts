import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManagedCredentialsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetManagedCredentialsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetManagedCredentials200ApplicationJson extends SpeakeasyBase {
    data?: shared.ManagedCredential[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetManagedCredentialsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetManagedCredentialsRequest extends SpeakeasyBase {
    queryParams: GetManagedCredentialsQueryParams;
    security: GetManagedCredentialsSecurity;
}
export declare class GetManagedCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getManagedCredentials200ApplicationJsonObject?: GetManagedCredentials200ApplicationJson;
    getManagedCredentialsDefaultApplicationJsonObject?: GetManagedCredentialsDefaultApplicationJson;
}
