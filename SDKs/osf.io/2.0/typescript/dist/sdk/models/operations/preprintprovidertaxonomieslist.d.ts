import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreprintProviderTaxonomiesListPathParams extends SpeakeasyBase {
    preprintProviderId: string;
}
export declare class PreprintProviderTaxonomiesListRequest extends SpeakeasyBase {
    pathParams: PreprintProviderTaxonomiesListPathParams;
}
export declare class PreprintProviderTaxonomiesListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
