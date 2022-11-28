import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope } from "./googleclouddatacatalogv1beta1searchcatalogrequestscope";



// GoogleCloudDatacatalogV1beta1SearchCatalogRequest
/** 
 * Request message for SearchCatalog.
**/
export class GoogleCloudDatacatalogV1beta1SearchCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope;
}
