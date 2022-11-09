import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FactchecktoolsPagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    offset?: number;
    organization?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    url?: string;
}
export declare class FactchecktoolsPagesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FactchecktoolsPagesListRequest extends SpeakeasyBase {
    queryParams: FactchecktoolsPagesListQueryParams;
    security: FactchecktoolsPagesListSecurity;
}
export declare class FactchecktoolsPagesListResponse extends SpeakeasyBase {
    contentType: string;
    googleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse?: shared.GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse;
    statusCode: number;
}
