import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1SearchCatalogResult } from "./googleclouddatacatalogv1searchcatalogresult";


// GoogleCloudDatacatalogV1SearchCatalogResponse
/** 
 * Response message for SearchCatalog.
**/
export class GoogleCloudDatacatalogV1SearchCatalogResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=results", elemType: shared.GoogleCloudDatacatalogV1SearchCatalogResult })
  results?: GoogleCloudDatacatalogV1SearchCatalogResult[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
