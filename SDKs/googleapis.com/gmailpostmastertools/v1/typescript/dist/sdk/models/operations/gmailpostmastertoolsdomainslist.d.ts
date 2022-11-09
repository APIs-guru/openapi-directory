import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GmailpostmastertoolsDomainsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GmailpostmastertoolsDomainsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailpostmastertoolsDomainsListRequest extends SpeakeasyBase {
    queryParams: GmailpostmastertoolsDomainsListQueryParams;
    security: GmailpostmastertoolsDomainsListSecurity;
}
export declare class GmailpostmastertoolsDomainsListResponse extends SpeakeasyBase {
    contentType: string;
    listDomainsResponse?: shared.ListDomainsResponse;
    statusCode: number;
}
