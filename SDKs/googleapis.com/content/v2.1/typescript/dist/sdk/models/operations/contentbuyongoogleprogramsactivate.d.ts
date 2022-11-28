import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentBuyongoogleprogramsActivatePathParams extends SpeakeasyBase {
    merchantId: string;
    regionCode: string;
}
export declare class ContentBuyongoogleprogramsActivateQueryParams extends SpeakeasyBase {
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
export declare class ContentBuyongoogleprogramsActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentBuyongoogleprogramsActivateRequest extends SpeakeasyBase {
    pathParams: ContentBuyongoogleprogramsActivatePathParams;
    queryParams: ContentBuyongoogleprogramsActivateQueryParams;
    request?: Map<string, any>;
    security: ContentBuyongoogleprogramsActivateSecurity;
}
export declare class ContentBuyongoogleprogramsActivateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
