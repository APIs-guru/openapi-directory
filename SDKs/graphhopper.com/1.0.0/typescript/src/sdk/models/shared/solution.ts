import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
import { Detail } from "./detail";



export class SolutionUnassigned extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breaks" })
  breaks?: string[];

  @SpeakeasyMetadata({ data: "json, name=details", elemType: Detail })
  details?: Detail[];

  @SpeakeasyMetadata({ data: "json, name=services" })
  services?: string[];

  @SpeakeasyMetadata({ data: "json, name=shipments" })
  shipments?: string[];
}


// Solution
/** 
 * Only available if status field indicates `finished`.
**/
export class Solution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completion_time" })
  completionTime?: number;

  @SpeakeasyMetadata({ data: "json, name=costs" })
  costs?: number;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=max_operation_time" })
  maxOperationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=no_unassigned" })
  noUnassigned?: number;

  @SpeakeasyMetadata({ data: "json, name=no_vehicles" })
  noVehicles?: number;

  @SpeakeasyMetadata({ data: "json, name=preparation_time" })
  preparationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: Route })
  routes?: Route[];

  @SpeakeasyMetadata({ data: "json, name=service_duration" })
  serviceDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=transport_time" })
  transportTime?: number;

  @SpeakeasyMetadata({ data: "json, name=unassigned" })
  unassigned?: SolutionUnassigned;

  @SpeakeasyMetadata({ data: "json, name=waiting_time" })
  waitingTime?: number;
}
