import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope } from "./googleclouddatacatalogv1beta1searchcatalogrequestscope";


// GoogleCloudDatacatalogV1beta1SearchCatalogRequest
/** 
 * Request message for SearchCatalog.
**/
export class GoogleCloudDatacatalogV1beta1SearchCatalogRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope;
}
