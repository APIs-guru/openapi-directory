import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ozone" })
  ozone: number;

  @SpeakeasyMetadata({ data: "json, name=ozone_time" })
  ozoneTime: string;

  @SpeakeasyMetadata({ data: "json, name=uv" })
  uv: number;

  @SpeakeasyMetadata({ data: "json, name=uv_max" })
  uvMax: number;

  @SpeakeasyMetadata({ data: "json, name=uv_max_time" })
  uvMaxTime: string;

  @SpeakeasyMetadata({ data: "json, name=uv_time" })
  uvTime: string;
}
