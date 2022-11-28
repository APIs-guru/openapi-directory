import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceContext } from "./servicecontext";
import { ErrorGroup } from "./errorgroup";
import { ErrorEvent } from "./errorevent";
import { TimedCount } from "./timedcount";
/**
 * Data extracted for a specific group based on certain filter criteria, such as a given time period and/or service filter.
**/
export declare class ErrorGroupStats extends SpeakeasyBase {
    affectedServices?: ServiceContext[];
    affectedUsersCount?: string;
    count?: string;
    firstSeenTime?: string;
    group?: ErrorGroup;
    lastSeenTime?: string;
    numAffectedServices?: number;
    representative?: ErrorEvent;
    timedCounts?: TimedCount[];
}
