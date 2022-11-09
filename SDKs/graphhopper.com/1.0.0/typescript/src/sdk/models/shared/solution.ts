import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Route } from "./route";
import { Detail } from "./detail";


export class SolutionUnassigned extends SpeakeasyBase {
  @Metadata({ data: "json, name=breaks" })
  breaks?: string[];

  @Metadata({ data: "json, name=details", elemType: shared.Detail })
  details?: Detail[];

  @Metadata({ data: "json, name=services" })
  services?: string[];

  @Metadata({ data: "json, name=shipments" })
  shipments?: string[];
}


// Solution
/** 
 * Only available if status field indicates `finished`.
**/
export class Solution extends SpeakeasyBase {
  @Metadata({ data: "json, name=completion_time" })
  completionTime?: number;

  @Metadata({ data: "json, name=costs" })
  costs?: number;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=max_operation_time" })
  maxOperationTime?: number;

  @Metadata({ data: "json, name=no_unassigned" })
  noUnassigned?: number;

  @Metadata({ data: "json, name=no_vehicles" })
  noVehicles?: number;

  @Metadata({ data: "json, name=preparation_time" })
  preparationTime?: number;

  @Metadata({ data: "json, name=routes", elemType: shared.Route })
  routes?: Route[];

  @Metadata({ data: "json, name=service_duration" })
  serviceDuration?: number;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=transport_time" })
  transportTime?: number;

  @Metadata({ data: "json, name=unassigned" })
  unassigned?: SolutionUnassigned;

  @Metadata({ data: "json, name=waiting_time" })
  waitingTime?: number;
}
