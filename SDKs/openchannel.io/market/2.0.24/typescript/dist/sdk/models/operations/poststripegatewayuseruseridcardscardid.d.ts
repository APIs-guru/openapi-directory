import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostStripeGatewayUserUserIdCardsCardIdPathParams extends SpeakeasyBase {
    cardId: string;
    userId: string;
}
export declare class PostStripeGatewayUserUserIdCardsCardIdQueryParams extends SpeakeasyBase {
    addressCity?: string;
    addressCountry?: string;
    addressLine1?: string;
    addressLine2?: string;
    addressState?: string;
    addressZip?: string;
    isDefault?: boolean;
}
export declare class PostStripeGatewayUserUserIdCardsCardIdRequest extends SpeakeasyBase {
    pathParams: PostStripeGatewayUserUserIdCardsCardIdPathParams;
    queryParams: PostStripeGatewayUserUserIdCardsCardIdQueryParams;
}
export declare class PostStripeGatewayUserUserIdCardsCardIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
