import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetaddressmatchQueryParams extends SpeakeasyBase {
    address: string;
    license: string;
}
export declare class Getaddressmatch200ApplicationJson extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetaddressmatchRequest extends SpeakeasyBase {
    queryParams: GetaddressmatchQueryParams;
}
export declare class GetaddressmatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getaddressmatch200ApplicationJsonObject?: Getaddressmatch200ApplicationJson;
}
