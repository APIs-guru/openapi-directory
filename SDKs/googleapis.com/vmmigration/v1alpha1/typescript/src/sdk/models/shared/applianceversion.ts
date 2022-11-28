import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplianceVersion
/** 
 * Describes an appliance version.
**/
export class ApplianceVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=critical" })
  critical?: boolean;

  @SpeakeasyMetadata({ data: "json, name=releaseNotesUri" })
  releaseNotesUri?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
