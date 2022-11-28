import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Advice } from "./advice";


export enum ConfigChangeChangeTypeEnum {
    ChangeTypeUnspecified = "CHANGE_TYPE_UNSPECIFIED",
    Added = "ADDED",
    Removed = "REMOVED",
    Modified = "MODIFIED"
}


// ConfigChange
/** 
 * Output generated from semantically comparing two versions of a service configuration. Includes detailed information about a field that have changed with applicable advice about potential consequences for the change, such as backwards-incompatibility.
**/
export class ConfigChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advices", elemType: Advice })
  advices?: Advice[];

  @SpeakeasyMetadata({ data: "json, name=changeType" })
  changeType?: ConfigChangeChangeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=element" })
  element?: string;

  @SpeakeasyMetadata({ data: "json, name=newValue" })
  newValue?: string;

  @SpeakeasyMetadata({ data: "json, name=oldValue" })
  oldValue?: string;
}
