import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreprintProviderLicensesListPathParams extends SpeakeasyBase {
    preprintProviderId: string;
}
export declare class PreprintProviderLicensesListRequest extends SpeakeasyBase {
    pathParams: PreprintProviderLicensesListPathParams;
}
export declare class PreprintProviderLicensesListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
