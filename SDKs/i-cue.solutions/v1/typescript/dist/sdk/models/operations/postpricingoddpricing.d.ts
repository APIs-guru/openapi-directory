import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPricingOddPricingHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostPricingOddPricingRequest extends SpeakeasyBase {
    headers: PostPricingOddPricingHeaders;
}
export declare class PostPricingOddPricingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
