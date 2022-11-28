import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeFirewallsPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class GetLinodeFirewallsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetLinodeFirewallsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeFirewalls200ApplicationJson extends SpeakeasyBase {
    data?: shared.Firewall[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLinodeFirewallsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeFirewallsRequest extends SpeakeasyBase {
    pathParams: GetLinodeFirewallsPathParams;
    queryParams: GetLinodeFirewallsQueryParams;
    security: GetLinodeFirewallsSecurity;
}
export declare class GetLinodeFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLinodeFirewalls200ApplicationJsonObject?: GetLinodeFirewalls200ApplicationJson;
    getLinodeFirewallsDefaultApplicationJsonObject?: GetLinodeFirewallsDefaultApplicationJson;
}
