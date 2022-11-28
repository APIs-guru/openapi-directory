import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPricingBundlePricingHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostPricingBundlePricingRequest extends SpeakeasyBase {
    headers: PostPricingBundlePricingHeaders;
}
export declare class PostPricingBundlePricingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
