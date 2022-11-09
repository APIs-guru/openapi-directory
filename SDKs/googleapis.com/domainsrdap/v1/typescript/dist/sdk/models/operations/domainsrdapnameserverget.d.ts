import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DomainsrdapNameserverGetPathParams extends SpeakeasyBase {
    nameserverId: string;
}
export declare class DomainsrdapNameserverGetQueryParams extends SpeakeasyBase {
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
export declare class DomainsrdapNameserverGetRequest extends SpeakeasyBase {
    pathParams: DomainsrdapNameserverGetPathParams;
    queryParams: DomainsrdapNameserverGetQueryParams;
}
export declare class DomainsrdapNameserverGetResponse extends SpeakeasyBase {
    contentType: string;
    rdapResponse?: shared.RdapResponse;
    statusCode: number;
}
