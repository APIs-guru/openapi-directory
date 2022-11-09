import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"}`.
**/
export declare class Query extends SpeakeasyBase {
    query?: string;
}
