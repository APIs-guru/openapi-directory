import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsrdapGetNameserversQueryParams extends SpeakeasyBase {
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
export declare class DomainsrdapGetNameserversRequest extends SpeakeasyBase {
    queryParams: DomainsrdapGetNameserversQueryParams;
}
export declare class DomainsrdapGetNameserversResponse extends SpeakeasyBase {
    contentType: string;
    rdapResponse?: shared.RdapResponse;
    statusCode: number;
}
