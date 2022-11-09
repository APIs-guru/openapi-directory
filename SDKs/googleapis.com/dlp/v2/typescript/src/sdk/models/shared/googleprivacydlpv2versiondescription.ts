import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2VersionDescription
/** 
 * Details about each available version for an infotype.
**/
export class GooglePrivacyDlpV2VersionDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
