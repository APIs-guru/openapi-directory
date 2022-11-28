import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdModulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdModuleQueryParams extends SpeakeasyBase {
    ignoreLength?: string[];
    short?: boolean;
    simplify?: boolean;
}
export declare class GetSeriesIdModuleRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdModulePathParams;
    queryParams: GetSeriesIdModuleQueryParams;
}
export declare class GetSeriesIdModuleResponse extends SpeakeasyBase {
    contentType: string;
    getSeriesIdModule200ApplicationJsonAny?: any;
    statusCode: number;
}
