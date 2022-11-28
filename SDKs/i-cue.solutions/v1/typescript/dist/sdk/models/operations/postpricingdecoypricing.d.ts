import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPricingDecoyPricingHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostPricingDecoyPricingRequest extends SpeakeasyBase {
    headers: PostPricingDecoyPricingHeaders;
}
export declare class PostPricingDecoyPricingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
