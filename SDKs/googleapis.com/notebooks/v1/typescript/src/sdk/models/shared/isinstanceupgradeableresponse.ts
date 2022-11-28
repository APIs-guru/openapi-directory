import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IsInstanceUpgradeableResponse
/** 
 * Response for checking if a notebook instance is upgradeable.
**/
export class IsInstanceUpgradeableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=upgradeImage" })
  upgradeImage?: string;

  @SpeakeasyMetadata({ data: "json, name=upgradeInfo" })
  upgradeInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=upgradeVersion" })
  upgradeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=upgradeable" })
  upgradeable?: boolean;
}
