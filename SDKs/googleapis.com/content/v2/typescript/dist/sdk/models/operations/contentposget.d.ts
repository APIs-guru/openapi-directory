import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentPosGetPathParams extends SpeakeasyBase {
    merchantId: string;
    storeCode: string;
    targetMerchantId: string;
}
export declare class ContentPosGetQueryParams extends SpeakeasyBase {
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
export declare class ContentPosGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentPosGetRequest extends SpeakeasyBase {
    pathParams: ContentPosGetPathParams;
    queryParams: ContentPosGetQueryParams;
    security: ContentPosGetSecurity;
}
export declare class ContentPosGetResponse extends SpeakeasyBase {
    contentType: string;
    posStore?: shared.PosStore;
    statusCode: number;
}
