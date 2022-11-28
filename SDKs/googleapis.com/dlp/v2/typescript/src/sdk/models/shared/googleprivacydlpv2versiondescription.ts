import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2VersionDescription
/** 
 * Details about each available version for an infotype.
**/
export class GooglePrivacyDlpV2VersionDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
