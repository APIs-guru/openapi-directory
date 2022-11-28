import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { QueryCountByStatus } from "./querycountbystatus";
/**
 * Search application level query stats per date
**/
export declare class SearchApplicationQueryStats extends SpeakeasyBase {
    date?: Date;
    queryCountByStatus?: QueryCountByStatus[];
}
