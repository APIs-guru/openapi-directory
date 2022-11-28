import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerQueryStats } from "./customerquerystats";
export declare class GetCustomerQueryStatsResponse extends SpeakeasyBase {
    stats?: CustomerQueryStats[];
    totalQueryCount?: string;
}
