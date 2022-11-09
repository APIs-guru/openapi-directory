import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudRunRewrite
/** 
 * A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error).
**/
export class CloudRunRewrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;
}
