import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClusterConfigurationRouting extends SpeakeasyBase {
  @Metadata({ data: "json, name=cost_per_meter" })
  costPerMeter?: number;

  @Metadata({ data: "json, name=cost_per_second" })
  costPerSecond?: number;

  @Metadata({ data: "json, name=profile" })
  profile?: string;
}
