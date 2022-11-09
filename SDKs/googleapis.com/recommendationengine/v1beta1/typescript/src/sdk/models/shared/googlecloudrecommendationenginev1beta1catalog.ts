import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig } from "./googlecloudrecommendationenginev1beta1catalogitemlevelconfig";


// GoogleCloudRecommendationengineV1beta1Catalog
/** 
 * The catalog configuration. Next ID: 5.
**/
export class GoogleCloudRecommendationengineV1beta1Catalog extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogItemLevelConfig" })
  catalogItemLevelConfig?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig;

  @Metadata({ data: "json, name=defaultEventStoreId" })
  defaultEventStoreId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
