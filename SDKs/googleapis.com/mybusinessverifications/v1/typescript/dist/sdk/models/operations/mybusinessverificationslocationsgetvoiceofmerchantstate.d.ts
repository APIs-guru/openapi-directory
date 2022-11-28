import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessverificationsLocationsGetVoiceOfMerchantStatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessverificationsLocationsGetVoiceOfMerchantStateQueryParams extends SpeakeasyBase {
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
export declare class MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest extends SpeakeasyBase {
    pathParams: MybusinessverificationsLocationsGetVoiceOfMerchantStatePathParams;
    queryParams: MybusinessverificationsLocationsGetVoiceOfMerchantStateQueryParams;
}
export declare class MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceOfMerchantState?: shared.VoiceOfMerchantState;
}
