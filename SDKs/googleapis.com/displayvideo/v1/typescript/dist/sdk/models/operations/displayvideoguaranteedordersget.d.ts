import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoGuaranteedOrdersGetPathParams extends SpeakeasyBase {
    guaranteedOrderId: string;
}
export declare class DisplayvideoGuaranteedOrdersGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoGuaranteedOrdersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoGuaranteedOrdersGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoGuaranteedOrdersGetPathParams;
    queryParams: DisplayvideoGuaranteedOrdersGetQueryParams;
    security: DisplayvideoGuaranteedOrdersGetSecurity;
}
export declare class DisplayvideoGuaranteedOrdersGetResponse extends SpeakeasyBase {
    contentType: string;
    guaranteedOrder?: shared.GuaranteedOrder;
    statusCode: number;
}
