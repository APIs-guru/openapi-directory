import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentBuyongoogleprogramsGetPathParams extends SpeakeasyBase {
    merchantId: string;
    regionCode: string;
}
export declare class ContentBuyongoogleprogramsGetQueryParams extends SpeakeasyBase {
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
export declare class ContentBuyongoogleprogramsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentBuyongoogleprogramsGetRequest extends SpeakeasyBase {
    pathParams: ContentBuyongoogleprogramsGetPathParams;
    queryParams: ContentBuyongoogleprogramsGetQueryParams;
    security: ContentBuyongoogleprogramsGetSecurity;
}
export declare class ContentBuyongoogleprogramsGetResponse extends SpeakeasyBase {
    buyOnGoogleProgramStatus?: shared.BuyOnGoogleProgramStatus;
    contentType: string;
    statusCode: number;
}
