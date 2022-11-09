import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudRunMetadata
/** 
 * CloudRunMetadata contains information from a Cloud Run deployment.
**/
export class CloudRunMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=serviceUrls" })
  serviceUrls?: string[];
}
