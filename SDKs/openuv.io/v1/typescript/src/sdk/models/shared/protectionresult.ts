import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtectionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ozone" })
  ozone: number;

  @Metadata({ data: "json, name=ozone_time" })
  ozoneTime: string;

  @Metadata({ data: "json, name=uv" })
  uv: number;

  @Metadata({ data: "json, name=uv_max" })
  uvMax: number;

  @Metadata({ data: "json, name=uv_max_time" })
  uvMaxTime: string;

  @Metadata({ data: "json, name=uv_time" })
  uvTime: string;
}
