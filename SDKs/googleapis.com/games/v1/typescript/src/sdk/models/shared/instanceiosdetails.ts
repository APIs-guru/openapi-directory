import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceIosDetails
/** 
 * The iOS details resource.
**/
export class InstanceIosDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleIdentifier" })
  bundleIdentifier?: string;

  @Metadata({ data: "json, name=itunesAppId" })
  itunesAppId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=preferredForIpad" })
  preferredForIpad?: boolean;

  @Metadata({ data: "json, name=preferredForIphone" })
  preferredForIphone?: boolean;

  @Metadata({ data: "json, name=supportIpad" })
  supportIpad?: boolean;

  @Metadata({ data: "json, name=supportIphone" })
  supportIphone?: boolean;
}
