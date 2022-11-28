import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConvertUrlQueryParams extends SpeakeasyBase {
    url: string;
}
export declare class ConvertUrlRequest extends SpeakeasyBase {
    queryParams: ConvertUrlQueryParams;
}
export declare class ConvertUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    convertUrl200ApplicationJsonAny?: any;
}
