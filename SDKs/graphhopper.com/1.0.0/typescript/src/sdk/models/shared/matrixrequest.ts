import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VehicleProfileIdEnum } from "./vehicleprofileidenum";


export class MatrixRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fail_fast" })
  failFast?: boolean;

  @Metadata({ data: "json, name=from_curbsides" })
  fromCurbsides?: string[];

  @Metadata({ data: "json, name=from_point_hints" })
  fromPointHints?: string[];

  @Metadata({ data: "json, name=from_points" })
  fromPoints?: number[][];

  @Metadata({ data: "json, name=out_arrays" })
  outArrays?: string[];

  @Metadata({ data: "json, name=snap_preventions" })
  snapPreventions?: string[];

  @Metadata({ data: "json, name=to_curbsides" })
  toCurbsides?: string[];

  @Metadata({ data: "json, name=to_point_hints" })
  toPointHints?: string[];

  @Metadata({ data: "json, name=to_points" })
  toPoints?: number[][];

  @Metadata({ data: "json, name=turn_costs" })
  turnCosts?: boolean;

  @Metadata({ data: "json, name=vehicle" })
  vehicle?: VehicleProfileIdEnum;
}
