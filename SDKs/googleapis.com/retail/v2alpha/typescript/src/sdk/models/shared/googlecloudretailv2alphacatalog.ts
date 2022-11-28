import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaMerchantCenterLinkingConfig } from "./googlecloudretailv2alphamerchantcenterlinkingconfig";
import { GoogleCloudRetailV2alphaProductLevelConfig } from "./googlecloudretailv2alphaproductlevelconfig";



// GoogleCloudRetailV2alphaCatalog
/** 
 * The catalog configuration.
**/
export class GoogleCloudRetailV2alphaCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantCenterLinkingConfig" })
  merchantCenterLinkingConfig?: GoogleCloudRetailV2alphaMerchantCenterLinkingConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productLevelConfig" })
  productLevelConfig?: GoogleCloudRetailV2alphaProductLevelConfig;
}
