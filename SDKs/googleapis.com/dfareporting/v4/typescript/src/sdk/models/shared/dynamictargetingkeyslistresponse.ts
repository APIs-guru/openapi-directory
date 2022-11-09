import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DynamicTargetingKey } from "./dynamictargetingkey";


// DynamicTargetingKeysListResponse
/** 
 * Dynamic Targeting Key List Response
**/
export class DynamicTargetingKeysListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicTargetingKeys", elemType: shared.DynamicTargetingKey })
  dynamicTargetingKeys?: DynamicTargetingKey[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
