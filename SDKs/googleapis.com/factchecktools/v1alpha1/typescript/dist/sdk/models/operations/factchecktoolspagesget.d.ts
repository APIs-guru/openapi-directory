import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FactchecktoolsPagesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FactchecktoolsPagesGetQueryParams extends SpeakeasyBase {
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
export declare class FactchecktoolsPagesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FactchecktoolsPagesGetRequest extends SpeakeasyBase {
    pathParams: FactchecktoolsPagesGetPathParams;
    queryParams: FactchecktoolsPagesGetQueryParams;
    security: FactchecktoolsPagesGetSecurity;
}
export declare class FactchecktoolsPagesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage?: shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
    statusCode: number;
}
