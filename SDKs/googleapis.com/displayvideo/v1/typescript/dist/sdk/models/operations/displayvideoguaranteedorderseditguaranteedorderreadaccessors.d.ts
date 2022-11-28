import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams extends SpeakeasyBase {
    guaranteedOrderId: string;
}
export declare class DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams;
    queryParams: DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams;
    request?: shared.EditGuaranteedOrderReadAccessorsRequest;
    security: DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity;
}
export declare class DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse extends SpeakeasyBase {
    contentType: string;
    editGuaranteedOrderReadAccessorsResponse?: shared.EditGuaranteedOrderReadAccessorsResponse;
    statusCode: number;
}
