import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreprintProviderDetailPathParams extends SpeakeasyBase {
    preprintProviderId: string;
}
export declare class PreprintProviderDetailRequest extends SpeakeasyBase {
    pathParams: PreprintProviderDetailPathParams;
}
export declare class PreprintProviderDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
