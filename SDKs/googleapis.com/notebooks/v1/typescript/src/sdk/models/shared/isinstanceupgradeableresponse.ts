import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IsInstanceUpgradeableResponse
/** 
 * Response for checking if a notebook instance is upgradeable.
**/
export class IsInstanceUpgradeableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=upgradeImage" })
  upgradeImage?: string;

  @Metadata({ data: "json, name=upgradeInfo" })
  upgradeInfo?: string;

  @Metadata({ data: "json, name=upgradeVersion" })
  upgradeVersion?: string;

  @Metadata({ data: "json, name=upgradeable" })
  upgradeable?: boolean;
}
