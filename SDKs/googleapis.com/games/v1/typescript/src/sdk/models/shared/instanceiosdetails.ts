import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceIosDetails
/** 
 * The iOS details resource.
**/
export class InstanceIosDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleIdentifier" })
  bundleIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=itunesAppId" })
  itunesAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredForIpad" })
  preferredForIpad?: boolean;

  @SpeakeasyMetadata({ data: "json, name=preferredForIphone" })
  preferredForIphone?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportIpad" })
  supportIpad?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportIphone" })
  supportIphone?: boolean;
}
