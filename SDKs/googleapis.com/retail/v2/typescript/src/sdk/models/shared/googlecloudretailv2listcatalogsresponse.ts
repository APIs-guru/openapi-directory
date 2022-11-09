import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2Catalog } from "./googlecloudretailv2catalog";


// GoogleCloudRetailV2ListCatalogsResponse
/** 
 * Response for CatalogService.ListCatalogs method.
**/
export class GoogleCloudRetailV2ListCatalogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogs", elemType: shared.GoogleCloudRetailV2Catalog })
  catalogs?: GoogleCloudRetailV2Catalog[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
