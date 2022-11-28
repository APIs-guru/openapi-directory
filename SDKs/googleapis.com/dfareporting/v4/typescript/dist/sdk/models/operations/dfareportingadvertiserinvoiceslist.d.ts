import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserInvoicesListPathParams extends SpeakeasyBase {
    advertiserId: string;
    profileId: string;
}
export declare class DfareportingAdvertiserInvoicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    issueMonth?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingAdvertiserInvoicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserInvoicesListRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserInvoicesListPathParams;
    queryParams: DfareportingAdvertiserInvoicesListQueryParams;
    security: DfareportingAdvertiserInvoicesListSecurity;
}
export declare class DfareportingAdvertiserInvoicesListResponse extends SpeakeasyBase {
    advertiserInvoicesListResponse?: shared.AdvertiserInvoicesListResponse;
    contentType: string;
    statusCode: number;
}
