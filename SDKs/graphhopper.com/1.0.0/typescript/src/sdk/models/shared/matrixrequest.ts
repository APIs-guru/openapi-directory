import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VehicleProfileIdEnum } from "./vehicleprofileidenum";



export class MatrixRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fail_fast" })
  failFast?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from_curbsides" })
  fromCurbsides?: string[];

  @SpeakeasyMetadata({ data: "json, name=from_point_hints" })
  fromPointHints?: string[];

  @SpeakeasyMetadata({ data: "json, name=from_points" })
  fromPoints?: number[][];

  @SpeakeasyMetadata({ data: "json, name=out_arrays" })
  outArrays?: string[];

  @SpeakeasyMetadata({ data: "json, name=snap_preventions" })
  snapPreventions?: string[];

  @SpeakeasyMetadata({ data: "json, name=to_curbsides" })
  toCurbsides?: string[];

  @SpeakeasyMetadata({ data: "json, name=to_point_hints" })
  toPointHints?: string[];

  @SpeakeasyMetadata({ data: "json, name=to_points" })
  toPoints?: number[][];

  @SpeakeasyMetadata({ data: "json, name=turn_costs" })
  turnCosts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vehicle" })
  vehicle?: VehicleProfileIdEnum;
}
