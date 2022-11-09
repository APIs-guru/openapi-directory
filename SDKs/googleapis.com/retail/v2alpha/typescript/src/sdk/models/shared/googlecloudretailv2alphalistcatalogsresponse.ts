import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaCatalog } from "./googlecloudretailv2alphacatalog";


// GoogleCloudRetailV2alphaListCatalogsResponse
/** 
 * Response for CatalogService.ListCatalogs method.
**/
export class GoogleCloudRetailV2alphaListCatalogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogs", elemType: shared.GoogleCloudRetailV2alphaCatalog })
  catalogs?: GoogleCloudRetailV2alphaCatalog[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
