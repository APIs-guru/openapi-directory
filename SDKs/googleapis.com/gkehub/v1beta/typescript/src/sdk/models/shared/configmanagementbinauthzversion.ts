import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigManagementBinauthzVersion
/** 
 * The version of binauthz.
**/
export class ConfigManagementBinauthzVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhookVersion" })
  webhookVersion?: string;
}
