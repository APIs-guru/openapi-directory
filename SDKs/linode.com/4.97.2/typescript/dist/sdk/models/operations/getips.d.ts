import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIPsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetIPs200ApplicationJson extends SpeakeasyBase {
    data?: shared.IpAddress[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetIPsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetIPsRequest extends SpeakeasyBase {
    security: GetIPsSecurity;
}
export declare class GetIPsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getIPs200ApplicationJsonObject?: GetIPs200ApplicationJson;
    getIPsDefaultApplicationJsonObject?: GetIPsDefaultApplicationJson;
}
