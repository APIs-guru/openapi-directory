import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceContext } from "./servicecontext";
import { ErrorGroup } from "./errorgroup";
import { ErrorEvent } from "./errorevent";
import { TimedCount } from "./timedcount";


// ErrorGroupStats
/** 
 * Data extracted for a specific group based on certain filter criteria, such as a given time period and/or service filter.
**/
export class ErrorGroupStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=affectedServices", elemType: shared.ServiceContext })
  affectedServices?: ServiceContext[];

  @Metadata({ data: "json, name=affectedUsersCount" })
  affectedUsersCount?: string;

  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=firstSeenTime" })
  firstSeenTime?: string;

  @Metadata({ data: "json, name=group" })
  group?: ErrorGroup;

  @Metadata({ data: "json, name=lastSeenTime" })
  lastSeenTime?: string;

  @Metadata({ data: "json, name=numAffectedServices" })
  numAffectedServices?: number;

  @Metadata({ data: "json, name=representative" })
  representative?: ErrorEvent;

  @Metadata({ data: "json, name=timedCounts", elemType: shared.TimedCount })
  timedCounts?: TimedCount[];
}
