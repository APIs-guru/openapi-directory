import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudRunRevisionInfo
/** 
 * For display only. Metadata associated with a Cloud Run revision.
**/
export class CloudRunRevisionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceUri" })
  serviceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
