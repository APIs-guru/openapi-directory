import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VehicleProfileIdEnum } from "./vehicleprofileidenum";


export class SymmetricalMatrixRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=curbsides" })
  curbsides?: string[];

  @Metadata({ data: "json, name=fail_fast" })
  failFast?: boolean;

  @Metadata({ data: "json, name=out_arrays" })
  outArrays?: string[];

  @Metadata({ data: "json, name=point_hints" })
  pointHints?: string[];

  @Metadata({ data: "json, name=points" })
  points?: number[][];

  @Metadata({ data: "json, name=snap_preventions" })
  snapPreventions?: string[];

  @Metadata({ data: "json, name=turn_costs" })
  turnCosts?: boolean;

  @Metadata({ data: "json, name=vehicle" })
  vehicle?: VehicleProfileIdEnum;
}
