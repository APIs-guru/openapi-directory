import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClusterConfigurationRouting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cost_per_meter" })
  costPerMeter?: number;

  @SpeakeasyMetadata({ data: "json, name=cost_per_second" })
  costPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: string;
}
