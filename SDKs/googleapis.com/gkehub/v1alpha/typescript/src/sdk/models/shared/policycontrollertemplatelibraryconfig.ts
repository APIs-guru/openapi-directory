import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PolicyControllerTemplateLibraryConfig
/** 
 * The config specifying which default library templates to install.
**/
export class PolicyControllerTemplateLibraryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=included" })
  included?: boolean;
}
