import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsrdapGetEntitiesQueryParams extends SpeakeasyBase {
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
export declare class DomainsrdapGetEntitiesRequest extends SpeakeasyBase {
    queryParams: DomainsrdapGetEntitiesQueryParams;
}
export declare class DomainsrdapGetEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    rdapResponse?: shared.RdapResponse;
    statusCode: number;
}
