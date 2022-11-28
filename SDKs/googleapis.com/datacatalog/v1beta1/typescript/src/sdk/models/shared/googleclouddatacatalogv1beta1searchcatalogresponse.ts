import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SearchCatalogResult } from "./googleclouddatacatalogv1beta1searchcatalogresult";



// GoogleCloudDatacatalogV1beta1SearchCatalogResponse
/** 
 * Response message for SearchCatalog.
**/
export class GoogleCloudDatacatalogV1beta1SearchCatalogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudDatacatalogV1beta1SearchCatalogResult })
  results?: GoogleCloudDatacatalogV1beta1SearchCatalogResult[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
