import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ShareIPsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class ShareIPsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ShareIPsRequest extends SpeakeasyBase {
    request: any;
    security: ShareIPsSecurity;
}
export declare class ShareIPsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    shareIPs200ApplicationJsonObject?: Map<string, any>;
    shareIPsDefaultApplicationJsonObject?: ShareIPsDefaultApplicationJson;
}
