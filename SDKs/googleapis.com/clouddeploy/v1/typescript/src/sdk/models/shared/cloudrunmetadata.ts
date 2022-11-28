import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudRunMetadata
/** 
 * CloudRunMetadata contains information from a Cloud Run deployment.
**/
export class CloudRunMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceUrls" })
  serviceUrls?: string[];
}
