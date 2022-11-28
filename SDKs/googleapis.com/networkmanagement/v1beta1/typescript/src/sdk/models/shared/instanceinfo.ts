import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceInfo
/** 
 * For display only. Metadata associated with a Compute Engine instance.
**/
export class InstanceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=externalIp" })
  externalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: string;

  @SpeakeasyMetadata({ data: "json, name=internalIp" })
  internalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
