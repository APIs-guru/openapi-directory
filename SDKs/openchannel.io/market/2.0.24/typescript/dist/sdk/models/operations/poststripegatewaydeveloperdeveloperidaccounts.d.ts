import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostStripeGatewayDeveloperDeveloperIdAccountsPathParams extends SpeakeasyBase {
    developerId: string;
}
export declare class PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams extends SpeakeasyBase {
    redirectUrl: string;
}
export declare class PostStripeGatewayDeveloperDeveloperIdAccountsRequest extends SpeakeasyBase {
    pathParams: PostStripeGatewayDeveloperDeveloperIdAccountsPathParams;
    queryParams: PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams;
}
export declare class PostStripeGatewayDeveloperDeveloperIdAccountsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
