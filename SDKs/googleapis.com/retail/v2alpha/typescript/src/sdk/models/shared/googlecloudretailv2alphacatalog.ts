import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaMerchantCenterLinkingConfig } from "./googlecloudretailv2alphamerchantcenterlinkingconfig";
import { GoogleCloudRetailV2alphaProductLevelConfig } from "./googlecloudretailv2alphaproductlevelconfig";


// GoogleCloudRetailV2alphaCatalog
/** 
 * The catalog configuration.
**/
export class GoogleCloudRetailV2alphaCatalog extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=merchantCenterLinkingConfig" })
  merchantCenterLinkingConfig?: GoogleCloudRetailV2alphaMerchantCenterLinkingConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productLevelConfig" })
  productLevelConfig?: GoogleCloudRetailV2alphaProductLevelConfig;
}
