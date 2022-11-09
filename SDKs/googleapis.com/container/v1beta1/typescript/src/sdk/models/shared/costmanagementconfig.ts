import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CostManagementConfig
/** 
 * Configuration for fine-grained cost management feature.
**/
export class CostManagementConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
