import { SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryMetadata } from "./querymetadata";
import { Parameters } from "./parameters";
import { QuerySchedule } from "./queryschedule";
/**
 * Represents a query.
**/
export declare class Query extends SpeakeasyBase {
    kind?: string;
    metadata?: QueryMetadata;
    params?: Parameters;
    queryId?: string;
    reportDataEndTimeMs?: string;
    reportDataStartTimeMs?: string;
    schedule?: QuerySchedule;
    timezoneCode?: string;
}
