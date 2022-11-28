import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsrdapIpGetPathParams extends SpeakeasyBase {
    ipId: string;
    ipId1: string;
}
export declare class DomainsrdapIpGetQueryParams extends SpeakeasyBase {
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
export declare class DomainsrdapIpGetRequest extends SpeakeasyBase {
    pathParams: DomainsrdapIpGetPathParams;
    queryParams: DomainsrdapIpGetQueryParams;
}
export declare class DomainsrdapIpGetResponse extends SpeakeasyBase {
    contentType: string;
    rdapResponse?: shared.RdapResponse;
    statusCode: number;
}
