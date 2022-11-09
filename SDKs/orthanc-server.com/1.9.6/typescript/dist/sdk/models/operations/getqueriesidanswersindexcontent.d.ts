import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetQueriesIdAnswersIndexContentPathParams extends SpeakeasyBase {
    id: string;
    index: string;
}
export declare class GetQueriesIdAnswersIndexContentQueryParams extends SpeakeasyBase {
    short?: boolean;
    simplify?: boolean;
}
export declare class GetQueriesIdAnswersIndexContentRequest extends SpeakeasyBase {
    pathParams: GetQueriesIdAnswersIndexContentPathParams;
    queryParams: GetQueriesIdAnswersIndexContentQueryParams;
}
export declare class GetQueriesIdAnswersIndexContentResponse extends SpeakeasyBase {
    contentType: string;
    getQueriesIdAnswersIndexContent200ApplicationJsonAny?: any;
    statusCode: number;
}
