import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostCustomGatewayRefundOwnershipIdPathParams extends SpeakeasyBase {
    ownershipId: string;
}
export declare class PostCustomGatewayRefundOwnershipIdQueryParams extends SpeakeasyBase {
    amount: number;
    customData?: string;
    date?: number;
    developerAmount?: number;
    feeAmount?: number;
    marketplaceAmount?: number;
}
export declare class PostCustomGatewayRefundOwnershipIdRequest extends SpeakeasyBase {
    pathParams: PostCustomGatewayRefundOwnershipIdPathParams;
    queryParams: PostCustomGatewayRefundOwnershipIdQueryParams;
}
export declare class PostCustomGatewayRefundOwnershipIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
