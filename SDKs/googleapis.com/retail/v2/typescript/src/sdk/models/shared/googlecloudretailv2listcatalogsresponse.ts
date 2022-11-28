import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Catalog } from "./googlecloudretailv2catalog";



// GoogleCloudRetailV2ListCatalogsResponse
/** 
 * Response for CatalogService.ListCatalogs method.
**/
export class GoogleCloudRetailV2ListCatalogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogs", elemType: GoogleCloudRetailV2Catalog })
  catalogs?: GoogleCloudRetailV2Catalog[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
