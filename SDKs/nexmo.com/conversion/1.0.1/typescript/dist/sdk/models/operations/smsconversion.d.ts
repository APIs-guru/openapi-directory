import { SpeakeasyBase } from "../../../internal/utils";
export declare class SmsConversionQueryParams extends SpeakeasyBase {
    delivered: any;
    messageId: string;
    timestamp: string;
}
export declare class SmsConversionRequest extends SpeakeasyBase {
    queryParams: SmsConversionQueryParams;
}
export declare class SmsConversionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
