import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentBuyongoogleprogramsRequestreviewPathParams extends SpeakeasyBase {
    merchantId: string;
    regionCode: string;
}
export declare class ContentBuyongoogleprogramsRequestreviewQueryParams extends SpeakeasyBase {
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
export declare class ContentBuyongoogleprogramsRequestreviewSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentBuyongoogleprogramsRequestreviewRequest extends SpeakeasyBase {
    pathParams: ContentBuyongoogleprogramsRequestreviewPathParams;
    queryParams: ContentBuyongoogleprogramsRequestreviewQueryParams;
    request?: Map<string, any>;
    security: ContentBuyongoogleprogramsRequestreviewSecurity;
}
export declare class ContentBuyongoogleprogramsRequestreviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
