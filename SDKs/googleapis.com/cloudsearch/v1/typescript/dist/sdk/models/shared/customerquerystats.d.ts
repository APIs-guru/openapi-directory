import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { QueryCountByStatus } from "./querycountbystatus";
export declare class CustomerQueryStats extends SpeakeasyBase {
    date?: Date;
    queryCountByStatus?: QueryCountByStatus[];
}
