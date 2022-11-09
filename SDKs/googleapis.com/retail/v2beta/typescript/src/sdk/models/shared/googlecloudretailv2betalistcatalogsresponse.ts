import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaCatalog } from "./googlecloudretailv2betacatalog";


// GoogleCloudRetailV2betaListCatalogsResponse
/** 
 * Response for CatalogService.ListCatalogs method.
**/
export class GoogleCloudRetailV2betaListCatalogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogs", elemType: shared.GoogleCloudRetailV2betaCatalog })
  catalogs?: GoogleCloudRetailV2betaCatalog[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
