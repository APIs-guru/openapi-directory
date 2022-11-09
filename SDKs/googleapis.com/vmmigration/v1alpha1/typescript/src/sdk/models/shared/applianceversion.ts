import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplianceVersion
/** 
 * Describes an appliance version.
**/
export class ApplianceVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=critical" })
  critical?: boolean;

  @Metadata({ data: "json, name=releaseNotesUri" })
  releaseNotesUri?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
