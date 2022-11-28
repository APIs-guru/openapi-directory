import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogV1beta1Catalog } from "./googlecloudprivatecatalogv1beta1catalog";



// GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse
/** 
 * Response message for PrivateCatalog.SearchCatalogs.
**/
export class GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GoogleCloudPrivatecatalogV1beta1Catalog })
  catalogs?: GoogleCloudPrivatecatalogV1beta1Catalog[];

  @SpeakeasyMetadata()
  nextPageToken?: string;
}
