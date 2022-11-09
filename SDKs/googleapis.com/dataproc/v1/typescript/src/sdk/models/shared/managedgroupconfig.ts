import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ManagedGroupConfig
/** 
 * Specifies the resources used to actively manage an instance group.
**/
export class ManagedGroupConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceGroupManagerName" })
  instanceGroupManagerName?: string;

  @Metadata({ data: "json, name=instanceTemplateName" })
  instanceTemplateName?: string;
}
