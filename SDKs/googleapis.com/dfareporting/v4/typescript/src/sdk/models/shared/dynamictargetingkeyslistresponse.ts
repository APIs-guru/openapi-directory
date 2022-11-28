import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicTargetingKey } from "./dynamictargetingkey";



// DynamicTargetingKeysListResponse
/** 
 * Dynamic Targeting Key List Response
**/
export class DynamicTargetingKeysListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicTargetingKeys", elemType: DynamicTargetingKey })
  dynamicTargetingKeys?: DynamicTargetingKey[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
