import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PolicyControllerTemplateLibraryConfig
/** 
 * The config specifying which default library templates to install.
**/
export class PolicyControllerTemplateLibraryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=included" })
  included?: boolean;
}
