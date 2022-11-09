import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceInfo
/** 
 * For display only. Metadata associated with a Compute Engine instance.
**/
export class InstanceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=externalIp" })
  externalIp?: string;

  @Metadata({ data: "json, name=interface" })
  interface?: string;

  @Metadata({ data: "json, name=internalIp" })
  internalIp?: string;

  @Metadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @Metadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
