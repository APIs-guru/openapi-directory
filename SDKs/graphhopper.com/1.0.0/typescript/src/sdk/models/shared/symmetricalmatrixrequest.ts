import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VehicleProfileIdEnum } from "./vehicleprofileidenum";



export class SymmetricalMatrixRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=curbsides" })
  curbsides?: string[];

  @SpeakeasyMetadata({ data: "json, name=fail_fast" })
  failFast?: boolean;

  @SpeakeasyMetadata({ data: "json, name=out_arrays" })
  outArrays?: string[];

  @SpeakeasyMetadata({ data: "json, name=point_hints" })
  pointHints?: string[];

  @SpeakeasyMetadata({ data: "json, name=points" })
  points?: number[][];

  @SpeakeasyMetadata({ data: "json, name=snap_preventions" })
  snapPreventions?: string[];

  @SpeakeasyMetadata({ data: "json, name=turn_costs" })
  turnCosts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vehicle" })
  vehicle?: VehicleProfileIdEnum;
}
