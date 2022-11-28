import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SearchCatalogResult } from "./googleclouddatacatalogv1searchcatalogresult";



// GoogleCloudDatacatalogV1SearchCatalogResponse
/** 
 * Response message for SearchCatalog.
**/
export class GoogleCloudDatacatalogV1SearchCatalogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudDatacatalogV1SearchCatalogResult })
  results?: GoogleCloudDatacatalogV1SearchCatalogResult[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
