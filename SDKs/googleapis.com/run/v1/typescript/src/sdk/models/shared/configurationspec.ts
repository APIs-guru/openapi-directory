import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevisionTemplate } from "./revisiontemplate";



// ConfigurationSpec
/** 
 * ConfigurationSpec holds the desired state of the Configuration (from the client).
**/
export class ConfigurationSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: RevisionTemplate;
}
