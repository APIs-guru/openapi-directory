import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigManagementBinauthzVersion
/** 
 * The version of binauthz.
**/
export class ConfigManagementBinauthzVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhookVersion" })
  webhookVersion?: string;
}
