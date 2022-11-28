import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCatalog } from "./googlecloudretailv2alphacatalog";



// GoogleCloudRetailV2alphaListCatalogsResponse
/** 
 * Response for CatalogService.ListCatalogs method.
**/
export class GoogleCloudRetailV2alphaListCatalogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogs", elemType: GoogleCloudRetailV2alphaCatalog })
  catalogs?: GoogleCloudRetailV2alphaCatalog[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
