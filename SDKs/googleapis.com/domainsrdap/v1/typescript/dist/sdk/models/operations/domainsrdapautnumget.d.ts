import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DomainsrdapAutnumGetPathParams extends SpeakeasyBase {
    autnumId: string;
}
export declare class DomainsrdapAutnumGetQueryParams extends SpeakeasyBase {
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
export declare class DomainsrdapAutnumGetRequest extends SpeakeasyBase {
    pathParams: DomainsrdapAutnumGetPathParams;
    queryParams: DomainsrdapAutnumGetQueryParams;
}
export declare class DomainsrdapAutnumGetResponse extends SpeakeasyBase {
    contentType: string;
    rdapResponse?: shared.RdapResponse;
    statusCode: number;
}
