import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetFirewallsServerList: readonly ["https://api.linode.com/v4"];
export declare class GetFirewallsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetFirewallsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetFirewalls200ApplicationJson extends SpeakeasyBase {
    data?: shared.Firewall[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetFirewallsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetFirewallsRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: GetFirewallsQueryParams;
    security: GetFirewallsSecurity;
}
export declare class GetFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getFirewalls200ApplicationJsonObject?: GetFirewalls200ApplicationJson;
    getFirewallsDefaultApplicationJsonObject?: GetFirewallsDefaultApplicationJson;
}
