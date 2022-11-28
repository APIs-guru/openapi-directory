import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoGuaranteedOrdersPatchPathParams extends SpeakeasyBase {
    guaranteedOrderId: string;
}
export declare class DisplayvideoGuaranteedOrdersPatchQueryParams extends SpeakeasyBase {
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
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoGuaranteedOrdersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoGuaranteedOrdersPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoGuaranteedOrdersPatchPathParams;
    queryParams: DisplayvideoGuaranteedOrdersPatchQueryParams;
    request?: shared.GuaranteedOrderInput;
    security: DisplayvideoGuaranteedOrdersPatchSecurity;
}
export declare class DisplayvideoGuaranteedOrdersPatchResponse extends SpeakeasyBase {
    contentType: string;
    guaranteedOrder?: shared.GuaranteedOrder;
    statusCode: number;
}
