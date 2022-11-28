import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CostManagementConfig
/** 
 * Configuration for fine-grained cost management feature.
**/
export class CostManagementConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
