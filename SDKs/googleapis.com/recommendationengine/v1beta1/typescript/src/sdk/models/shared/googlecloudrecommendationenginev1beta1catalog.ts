import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig } from "./googlecloudrecommendationenginev1beta1catalogitemlevelconfig";



// GoogleCloudRecommendationengineV1beta1Catalog
/** 
 * The catalog configuration. Next ID: 5.
**/
export class GoogleCloudRecommendationengineV1beta1Catalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogItemLevelConfig" })
  catalogItemLevelConfig?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig;

  @SpeakeasyMetadata({ data: "json, name=defaultEventStoreId" })
  defaultEventStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
