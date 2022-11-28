import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaMerchantCenterLinkingConfig } from "./googlecloudretailv2betamerchantcenterlinkingconfig";
import { GoogleCloudRetailV2betaProductLevelConfig } from "./googlecloudretailv2betaproductlevelconfig";



// GoogleCloudRetailV2betaCatalog
/** 
 * The catalog configuration.
**/
export class GoogleCloudRetailV2betaCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantCenterLinkingConfig" })
  merchantCenterLinkingConfig?: GoogleCloudRetailV2betaMerchantCenterLinkingConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productLevelConfig" })
  productLevelConfig?: GoogleCloudRetailV2betaProductLevelConfig;
}
