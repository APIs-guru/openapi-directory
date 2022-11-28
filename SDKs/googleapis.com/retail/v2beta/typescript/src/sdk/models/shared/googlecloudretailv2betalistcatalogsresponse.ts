import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCatalog } from "./googlecloudretailv2betacatalog";



// GoogleCloudRetailV2betaListCatalogsResponse
/** 
 * Response for CatalogService.ListCatalogs method.
**/
export class GoogleCloudRetailV2betaListCatalogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogs", elemType: GoogleCloudRetailV2betaCatalog })
  catalogs?: GoogleCloudRetailV2betaCatalog[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
