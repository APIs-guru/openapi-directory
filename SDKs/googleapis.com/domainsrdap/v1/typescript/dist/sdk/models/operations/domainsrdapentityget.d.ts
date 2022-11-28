import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsrdapEntityGetPathParams extends SpeakeasyBase {
    entityId: string;
}
export declare class DomainsrdapEntityGetQueryParams extends SpeakeasyBase {
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
export declare class DomainsrdapEntityGetRequest extends SpeakeasyBase {
    pathParams: DomainsrdapEntityGetPathParams;
    queryParams: DomainsrdapEntityGetQueryParams;
}
export declare class DomainsrdapEntityGetResponse extends SpeakeasyBase {
    contentType: string;
    rdapResponse?: shared.RdapResponse;
    statusCode: number;
}
