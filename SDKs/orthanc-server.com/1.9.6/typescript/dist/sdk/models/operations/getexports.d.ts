import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetExportsQueryParams extends SpeakeasyBase {
    limit?: number;
    since?: number;
}
export declare class GetExportsRequest extends SpeakeasyBase {
    queryParams: GetExportsQueryParams;
}
export declare class GetExportsResponse extends SpeakeasyBase {
    contentType: string;
    getExports200ApplicationJsonAny?: any;
    statusCode: number;
}
