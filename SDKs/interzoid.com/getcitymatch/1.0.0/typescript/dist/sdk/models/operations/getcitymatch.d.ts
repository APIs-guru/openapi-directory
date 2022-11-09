import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetcitymatchQueryParams extends SpeakeasyBase {
    city: string;
    license: string;
}
export declare class GetcitymatchRequest extends SpeakeasyBase {
    queryParams: GetcitymatchQueryParams;
}
export declare class Getcitymatch200ApplicationJson extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetcitymatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getcitymatch200ApplicationJsonObject?: Getcitymatch200ApplicationJson;
}
