import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A response returned by the connection after executing the sql query.
**/
export declare class ExecuteSqlQueryResponse extends SpeakeasyBase {
    results?: Map<string, any>[];
}
