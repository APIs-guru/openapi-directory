import { SpeakeasyBase } from "../../../internal/utils";
export declare class GlobalpageloadQueryParams extends SpeakeasyBase {
    license: string;
    origin: string;
    url: string;
}
export declare class Globalpageload200ApplicationJson extends SpeakeasyBase {
    code?: string;
    contents?: string;
    credits?: string;
    origin?: string;
    pageResponseStatus?: string;
    seconds?: string;
}
export declare class GlobalpageloadRequest extends SpeakeasyBase {
    queryParams: GlobalpageloadQueryParams;
}
export declare class GlobalpageloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    globalpageload200ApplicationJsonObject?: Globalpageload200ApplicationJson;
}
