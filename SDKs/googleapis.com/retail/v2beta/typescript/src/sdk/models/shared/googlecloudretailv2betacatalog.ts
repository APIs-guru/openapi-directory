import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaMerchantCenterLinkingConfig } from "./googlecloudretailv2betamerchantcenterlinkingconfig";
import { GoogleCloudRetailV2betaProductLevelConfig } from "./googlecloudretailv2betaproductlevelconfig";


// GoogleCloudRetailV2betaCatalog
/** 
 * The catalog configuration.
**/
export class GoogleCloudRetailV2betaCatalog extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=merchantCenterLinkingConfig" })
  merchantCenterLinkingConfig?: GoogleCloudRetailV2betaMerchantCenterLinkingConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productLevelConfig" })
  productLevelConfig?: GoogleCloudRetailV2betaProductLevelConfig;
}
