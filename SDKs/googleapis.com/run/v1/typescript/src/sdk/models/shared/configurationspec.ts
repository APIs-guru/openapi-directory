import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RevisionTemplate } from "./revisiontemplate";


// ConfigurationSpec
/** 
 * ConfigurationSpec holds the desired state of the Configuration (from the client).
**/
export class ConfigurationSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=template" })
  template?: RevisionTemplate;
}
