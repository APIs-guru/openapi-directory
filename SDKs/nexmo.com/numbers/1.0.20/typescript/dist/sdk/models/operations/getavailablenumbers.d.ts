import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetAvailableNumbersFeaturesEnum {
    Sms = "SMS",
    Voice = "VOICE",
    SmsVoice = "SMS,VOICE",
    Mms = "MMS",
    SmsMms = "SMS,MMS",
    VoiceMms = "VOICE,MMS",
    SmsMmsVoice = "SMS,MMS,VOICE"
}
export declare class GetAvailableNumbersQueryParams extends SpeakeasyBase {
    country: string;
    features?: GetAvailableNumbersFeaturesEnum;
    index?: number;
    pattern?: string;
    searchPattern?: number;
    size?: number;
    type?: shared.TypeEnum;
}
export declare class GetAvailableNumbersRequest extends SpeakeasyBase {
    queryParams: GetAvailableNumbersQueryParams;
}
export declare class GetAvailableNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountUnauthorized?: shared.AccountUnauthorized;
    availableNumbers?: shared.AvailableNumbers;
}
