import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Advice } from "./advice";

export enum ConfigChangeChangeTypeEnum {
    ChangeTypeUnspecified = "CHANGE_TYPE_UNSPECIFIED"
,    Added = "ADDED"
,    Removed = "REMOVED"
,    Modified = "MODIFIED"
}


// ConfigChange
/** 
 * Output generated from semantically comparing two versions of a service configuration. Includes detailed information about a field that have changed with applicable advice about potential consequences for the change, such as backwards-incompatibility.
**/
export class ConfigChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=advices", elemType: shared.Advice })
  advices?: Advice[];

  @Metadata({ data: "json, name=changeType" })
  changeType?: ConfigChangeChangeTypeEnum;

  @Metadata({ data: "json, name=element" })
  element?: string;

  @Metadata({ data: "json, name=newValue" })
  newValue?: string;

  @Metadata({ data: "json, name=oldValue" })
  oldValue?: string;
}
