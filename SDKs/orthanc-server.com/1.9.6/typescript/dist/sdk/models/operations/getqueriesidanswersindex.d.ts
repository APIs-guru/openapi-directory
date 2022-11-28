import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQueriesIdAnswersIndexPathParams extends SpeakeasyBase {
    id: string;
    index: string;
}
export declare class GetQueriesIdAnswersIndexRequest extends SpeakeasyBase {
    pathParams: GetQueriesIdAnswersIndexPathParams;
}
export declare class GetQueriesIdAnswersIndexResponse extends SpeakeasyBase {
    contentType: string;
    getQueriesIdAnswersIndex200ApplicationJsonAny?: any;
    statusCode: number;
}
