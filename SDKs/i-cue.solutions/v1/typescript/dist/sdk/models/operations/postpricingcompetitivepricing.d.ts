import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPricingCompetitivePricingHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostPricingCompetitivePricingRequest extends SpeakeasyBase {
    headers: PostPricingCompetitivePricingHeaders;
}
export declare class PostPricingCompetitivePricingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
