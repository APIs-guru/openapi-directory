import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentBuyongoogleprogramsPatchPathParams extends SpeakeasyBase {
    merchantId: string;
    regionCode: string;
}
export declare class ContentBuyongoogleprogramsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentBuyongoogleprogramsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentBuyongoogleprogramsPatchRequest extends SpeakeasyBase {
    pathParams: ContentBuyongoogleprogramsPatchPathParams;
    queryParams: ContentBuyongoogleprogramsPatchQueryParams;
    request?: shared.BuyOnGoogleProgramStatusInput;
    security: ContentBuyongoogleprogramsPatchSecurity;
}
export declare class ContentBuyongoogleprogramsPatchResponse extends SpeakeasyBase {
    buyOnGoogleProgramStatus?: shared.BuyOnGoogleProgramStatus;
    contentType: string;
    statusCode: number;
}
