import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostCustomGatewayPaymentOwnershipIdPathParams extends SpeakeasyBase {
    ownershipId: string;
}
export declare class PostCustomGatewayPaymentOwnershipIdQueryParams extends SpeakeasyBase {
    amount: number;
    customData?: string;
    date?: number;
    developerAmount?: number;
    feeAmount?: number;
    marketplaceAmount?: number;
}
export declare class PostCustomGatewayPaymentOwnershipIdRequest extends SpeakeasyBase {
    pathParams: PostCustomGatewayPaymentOwnershipIdPathParams;
    queryParams: PostCustomGatewayPaymentOwnershipIdQueryParams;
}
export declare class PostCustomGatewayPaymentOwnershipIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
