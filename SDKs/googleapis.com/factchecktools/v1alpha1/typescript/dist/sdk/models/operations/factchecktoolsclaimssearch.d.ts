import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FactchecktoolsClaimsSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    maxAgeDays?: number;
    oauthToken?: string;
    offset?: number;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    reviewPublisherSiteFilter?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FactchecktoolsClaimsSearchRequest extends SpeakeasyBase {
    queryParams: FactchecktoolsClaimsSearchQueryParams;
}
export declare class FactchecktoolsClaimsSearchResponse extends SpeakeasyBase {
    contentType: string;
    googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse?: shared.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse;
    statusCode: number;
}
