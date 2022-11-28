import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoGuaranteedOrdersCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoGuaranteedOrdersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoGuaranteedOrdersCreateRequest extends SpeakeasyBase {
    queryParams: DisplayvideoGuaranteedOrdersCreateQueryParams;
    request?: shared.GuaranteedOrderInput;
    security: DisplayvideoGuaranteedOrdersCreateSecurity;
}
export declare class DisplayvideoGuaranteedOrdersCreateResponse extends SpeakeasyBase {
    contentType: string;
    guaranteedOrder?: shared.GuaranteedOrder;
    statusCode: number;
}
