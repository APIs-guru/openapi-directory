import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentPosDeletePathParams extends SpeakeasyBase {
    merchantId: string;
    storeCode: string;
    targetMerchantId: string;
}
export declare class ContentPosDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dryRun?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentPosDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentPosDeleteRequest extends SpeakeasyBase {
    pathParams: ContentPosDeletePathParams;
    queryParams: ContentPosDeleteQueryParams;
    security: ContentPosDeleteSecurity;
}
export declare class ContentPosDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
