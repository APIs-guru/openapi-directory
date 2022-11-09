import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetcompanymatchQueryParams extends SpeakeasyBase {
    company: string;
    license: string;
}
export declare class GetcompanymatchRequest extends SpeakeasyBase {
    queryParams: GetcompanymatchQueryParams;
}
export declare class Getcompanymatch200ApplicationJson extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetcompanymatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getcompanymatch200ApplicationJsonObject?: Getcompanymatch200ApplicationJson;
}
