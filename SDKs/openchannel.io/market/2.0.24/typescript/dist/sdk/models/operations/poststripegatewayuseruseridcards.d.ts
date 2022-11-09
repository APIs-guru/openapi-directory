import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostStripeGatewayUserUserIdCardsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PostStripeGatewayUserUserIdCardsQueryParams extends SpeakeasyBase {
    isDefault?: boolean;
    token: string;
}
export declare class PostStripeGatewayUserUserIdCardsRequest extends SpeakeasyBase {
    pathParams: PostStripeGatewayUserUserIdCardsPathParams;
    queryParams: PostStripeGatewayUserUserIdCardsQueryParams;
}
export declare class PostStripeGatewayUserUserIdCardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
