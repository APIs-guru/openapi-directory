import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailpostmastertoolsDomainsTrafficStatsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GmailpostmastertoolsDomainsTrafficStatsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endDateDay?: number;
    endDateMonth?: number;
    endDateYear?: number;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startDateDay?: number;
    startDateMonth?: number;
    startDateYear?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GmailpostmastertoolsDomainsTrafficStatsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailpostmastertoolsDomainsTrafficStatsListRequest extends SpeakeasyBase {
    pathParams: GmailpostmastertoolsDomainsTrafficStatsListPathParams;
    queryParams: GmailpostmastertoolsDomainsTrafficStatsListQueryParams;
    security: GmailpostmastertoolsDomainsTrafficStatsListSecurity;
}
export declare class GmailpostmastertoolsDomainsTrafficStatsListResponse extends SpeakeasyBase {
    contentType: string;
    listTrafficStatsResponse?: shared.ListTrafficStatsResponse;
    statusCode: number;
}
