import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TrafficdirectorDiscoveryClientStatusQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TrafficdirectorDiscoveryClientStatusSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TrafficdirectorDiscoveryClientStatusRequest extends SpeakeasyBase {
    queryParams: TrafficdirectorDiscoveryClientStatusQueryParams;
    request?: shared.ClientStatusRequest;
    security: TrafficdirectorDiscoveryClientStatusSecurity;
}
export declare class TrafficdirectorDiscoveryClientStatusResponse extends SpeakeasyBase {
    clientStatusResponse?: shared.ClientStatusResponse;
    contentType: string;
    statusCode: number;
}
