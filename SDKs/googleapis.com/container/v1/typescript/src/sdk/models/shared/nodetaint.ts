import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NodeTaintEffectEnum {
    EffectUnspecified = "EFFECT_UNSPECIFIED",
    NoSchedule = "NO_SCHEDULE",
    PreferNoSchedule = "PREFER_NO_SCHEDULE",
    NoExecute = "NO_EXECUTE"
}


// NodeTaint
/** 
 * Kubernetes taint is comprised of three fields: key, value, and effect. Effect can only be one of three types: NoSchedule, PreferNoSchedule or NoExecute. See [here](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration) for more information, including usage and the valid values.
**/
export class NodeTaint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effect" })
  effect?: NodeTaintEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
