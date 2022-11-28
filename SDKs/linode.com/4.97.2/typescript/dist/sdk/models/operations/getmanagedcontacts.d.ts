import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManagedContactsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetManagedContactsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetManagedContacts200ApplicationJson extends SpeakeasyBase {
    data?: shared.ManagedContact[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetManagedContactsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetManagedContactsRequest extends SpeakeasyBase {
    queryParams: GetManagedContactsQueryParams;
    security: GetManagedContactsSecurity;
}
export declare class GetManagedContactsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getManagedContacts200ApplicationJsonObject?: GetManagedContacts200ApplicationJson;
    getManagedContactsDefaultApplicationJsonObject?: GetManagedContactsDefaultApplicationJson;
}
