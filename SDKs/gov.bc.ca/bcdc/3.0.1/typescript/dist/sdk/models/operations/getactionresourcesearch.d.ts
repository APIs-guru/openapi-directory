import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetActionResourceSearchQueryParams extends SpeakeasyBase {
    fields?: string;
    limit?: number;
    offset?: number;
    orderBy?: string;
    query?: string;
}
export declare class GetActionResourceSearchRequest extends SpeakeasyBase {
    queryParams: GetActionResourceSearchQueryParams;
}
export declare class GetActionResourceSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
