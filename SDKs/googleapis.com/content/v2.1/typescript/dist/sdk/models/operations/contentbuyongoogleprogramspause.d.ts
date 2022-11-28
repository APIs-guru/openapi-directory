import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentBuyongoogleprogramsPausePathParams extends SpeakeasyBase {
    merchantId: string;
    regionCode: string;
}
export declare class ContentBuyongoogleprogramsPauseQueryParams extends SpeakeasyBase {
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
export declare class ContentBuyongoogleprogramsPauseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentBuyongoogleprogramsPauseRequest extends SpeakeasyBase {
    pathParams: ContentBuyongoogleprogramsPausePathParams;
    queryParams: ContentBuyongoogleprogramsPauseQueryParams;
    request?: Map<string, any>;
    security: ContentBuyongoogleprogramsPauseSecurity;
}
export declare class ContentBuyongoogleprogramsPauseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
