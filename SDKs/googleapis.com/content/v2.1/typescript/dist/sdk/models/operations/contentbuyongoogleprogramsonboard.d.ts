import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentBuyongoogleprogramsOnboardPathParams extends SpeakeasyBase {
    merchantId: string;
    regionCode: string;
}
export declare class ContentBuyongoogleprogramsOnboardQueryParams extends SpeakeasyBase {
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
export declare class ContentBuyongoogleprogramsOnboardSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentBuyongoogleprogramsOnboardRequest extends SpeakeasyBase {
    pathParams: ContentBuyongoogleprogramsOnboardPathParams;
    queryParams: ContentBuyongoogleprogramsOnboardQueryParams;
    request?: shared.OnboardBuyOnGoogleProgramRequest;
    security: ContentBuyongoogleprogramsOnboardSecurity;
}
export declare class ContentBuyongoogleprogramsOnboardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
