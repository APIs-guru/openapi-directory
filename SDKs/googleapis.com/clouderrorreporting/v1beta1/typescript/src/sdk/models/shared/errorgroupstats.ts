import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceContext } from "./servicecontext";
import { ErrorGroup } from "./errorgroup";
import { ErrorEvent } from "./errorevent";
import { TimedCount } from "./timedcount";



// ErrorGroupStats
/** 
 * Data extracted for a specific group based on certain filter criteria, such as a given time period and/or service filter.
**/
export class ErrorGroupStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=affectedServices", elemType: ServiceContext })
  affectedServices?: ServiceContext[];

  @SpeakeasyMetadata({ data: "json, name=affectedUsersCount" })
  affectedUsersCount?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=firstSeenTime" })
  firstSeenTime?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: ErrorGroup;

  @SpeakeasyMetadata({ data: "json, name=lastSeenTime" })
  lastSeenTime?: string;

  @SpeakeasyMetadata({ data: "json, name=numAffectedServices" })
  numAffectedServices?: number;

  @SpeakeasyMetadata({ data: "json, name=representative" })
  representative?: ErrorEvent;

  @SpeakeasyMetadata({ data: "json, name=timedCounts", elemType: TimedCount })
  timedCounts?: TimedCount[];
}
