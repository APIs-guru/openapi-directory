import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQueriesIdQueryPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetQueriesIdQueryQueryParams extends SpeakeasyBase {
    short?: boolean;
    simplify?: boolean;
}
export declare class GetQueriesIdQueryRequest extends SpeakeasyBase {
    pathParams: GetQueriesIdQueryPathParams;
    queryParams: GetQueriesIdQueryQueryParams;
}
export declare class GetQueriesIdQueryResponse extends SpeakeasyBase {
    contentType: string;
    getQueriesIdQuery200ApplicationJsonAny?: any;
    statusCode: number;
}
