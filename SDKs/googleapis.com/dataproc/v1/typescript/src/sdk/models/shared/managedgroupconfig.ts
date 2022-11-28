import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManagedGroupConfig
/** 
 * Specifies the resources used to actively manage an instance group.
**/
export class ManagedGroupConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceGroupManagerName" })
  instanceGroupManagerName?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceTemplateName" })
  instanceTemplateName?: string;
}
