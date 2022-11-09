import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrafficRule } from "./trafficrule";
import { TrafficRule } from "./trafficrule";


export class NetworkConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=downRule" })
  downRule?: TrafficRule;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=upRule" })
  upRule?: TrafficRule;
}
