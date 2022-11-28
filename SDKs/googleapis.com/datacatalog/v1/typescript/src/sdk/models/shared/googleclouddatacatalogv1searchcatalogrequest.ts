import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SearchCatalogRequestScope } from "./googleclouddatacatalogv1searchcatalogrequestscope";



// GoogleCloudDatacatalogV1SearchCatalogRequest
/** 
 * Request message for SearchCatalog.
**/
export class GoogleCloudDatacatalogV1SearchCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleCloudDatacatalogV1SearchCatalogRequestScope;
}
