import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GmailpostmastertoolsDomainsTrafficStatsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GmailpostmastertoolsDomainsTrafficStatsGetQueryParams extends SpeakeasyBase {
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
export declare class GmailpostmastertoolsDomainsTrafficStatsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailpostmastertoolsDomainsTrafficStatsGetRequest extends SpeakeasyBase {
    pathParams: GmailpostmastertoolsDomainsTrafficStatsGetPathParams;
    queryParams: GmailpostmastertoolsDomainsTrafficStatsGetQueryParams;
    security: GmailpostmastertoolsDomainsTrafficStatsGetSecurity;
}
export declare class GmailpostmastertoolsDomainsTrafficStatsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trafficStats?: shared.TrafficStats;
}
