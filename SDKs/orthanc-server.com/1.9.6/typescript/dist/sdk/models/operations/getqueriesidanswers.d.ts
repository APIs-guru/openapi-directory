import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQueriesIdAnswersPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetQueriesIdAnswersQueryParams extends SpeakeasyBase {
    expand?: string;
    short?: boolean;
    simplify?: boolean;
}
export declare class GetQueriesIdAnswersRequest extends SpeakeasyBase {
    pathParams: GetQueriesIdAnswersPathParams;
    queryParams: GetQueriesIdAnswersQueryParams;
}
export declare class GetQueriesIdAnswersResponse extends SpeakeasyBase {
    contentType: string;
    getQueriesIdAnswers200ApplicationJsonAny?: any;
    statusCode: number;
}
