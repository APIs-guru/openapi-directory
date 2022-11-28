import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentPosInsertPathParams extends SpeakeasyBase {
    merchantId: string;
    targetMerchantId: string;
}
export declare class ContentPosInsertQueryParams extends SpeakeasyBase {
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
export declare class ContentPosInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentPosInsertRequest extends SpeakeasyBase {
    pathParams: ContentPosInsertPathParams;
    queryParams: ContentPosInsertQueryParams;
    request?: shared.PosStore;
    security: ContentPosInsertSecurity;
}
export declare class ContentPosInsertResponse extends SpeakeasyBase {
    contentType: string;
    posStore?: shared.PosStore;
    statusCode: number;
}
