import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetDomainsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetDomains200ApplicationJson extends SpeakeasyBase {
    data?: shared.Domain[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetDomainsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetDomainsRequest extends SpeakeasyBase {
    queryParams: GetDomainsQueryParams;
    security: GetDomainsSecurity;
}
export declare class GetDomainsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDomains200ApplicationJsonObject?: GetDomains200ApplicationJson;
    getDomainsDefaultApplicationJsonObject?: GetDomainsDefaultApplicationJson;
}
