import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetVlaNsServerList: readonly ["https://api.linode.com/v4", "https://api.linode.com/v4beta"];
export declare class GetVlaNsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetVlaNsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetVlaNs200ApplicationJson extends SpeakeasyBase {
    data?: shared.Vlans[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetVlaNsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetVlaNsRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: GetVlaNsQueryParams;
    security: GetVlaNsSecurity;
}
export declare class GetVlaNsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVlaNs200ApplicationJsonObject?: GetVlaNs200ApplicationJson;
    getVlaNsDefaultApplicationJsonObject?: GetVlaNsDefaultApplicationJson;
}
