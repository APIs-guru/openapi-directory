import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryApisGetRestPathParams extends SpeakeasyBase {
    api: string;
    version: string;
}
export declare class DiscoveryApisGetRestQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DiscoveryApisGetRestRequest extends SpeakeasyBase {
    pathParams: DiscoveryApisGetRestPathParams;
    queryParams: DiscoveryApisGetRestQueryParams;
}
export declare class DiscoveryApisGetRestResponse extends SpeakeasyBase {
    contentType: string;
    restDescription?: shared.RestDescription;
    statusCode: number;
}
