import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1SearchCatalogResult } from "./googleclouddatacatalogv1beta1searchcatalogresult";


// GoogleCloudDatacatalogV1beta1SearchCatalogResponse
/** 
 * Response message for SearchCatalog.
**/
export class GoogleCloudDatacatalogV1beta1SearchCatalogResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudDatacatalogV1beta1SearchCatalogResult })
  results?: GoogleCloudDatacatalogV1beta1SearchCatalogResult[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
