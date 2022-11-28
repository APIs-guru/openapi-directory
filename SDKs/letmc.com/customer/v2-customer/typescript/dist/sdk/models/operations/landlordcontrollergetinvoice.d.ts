import { SpeakeasyBase } from "../../../internal/utils";
export declare class LandlordControllerGetInvoicePathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetInvoiceQueryParams extends SpeakeasyBase {
    invoiceId: string;
    token: string;
}
export declare class LandlordControllerGetInvoiceRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetInvoicePathParams;
    queryParams: LandlordControllerGetInvoiceQueryParams;
}
export declare class LandlordControllerGetInvoiceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
