import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FactchecktoolsPagesUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FactchecktoolsPagesUpdateQueryParams extends SpeakeasyBase {
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
export declare class FactchecktoolsPagesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FactchecktoolsPagesUpdateRequest extends SpeakeasyBase {
    pathParams: FactchecktoolsPagesUpdatePathParams;
    queryParams: FactchecktoolsPagesUpdateQueryParams;
    request?: shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
    security: FactchecktoolsPagesUpdateSecurity;
}
export declare class FactchecktoolsPagesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage?: shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
    statusCode: number;
}
