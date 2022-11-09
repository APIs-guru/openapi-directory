import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class VoiceConversionQueryParams extends SpeakeasyBase {
    delivered: any;
    messageId: string;
    timestamp: string;
}
export declare class VoiceConversionRequest extends SpeakeasyBase {
    queryParams: VoiceConversionQueryParams;
}
export declare class VoiceConversionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
