import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficRule } from "./trafficrule";



export class NetworkConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downRule" })
  downRule?: TrafficRule;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=upRule" })
  upRule?: TrafficRule;
}
