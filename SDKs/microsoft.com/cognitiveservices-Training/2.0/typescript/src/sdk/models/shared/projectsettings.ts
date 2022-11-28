import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectSettings
/** 
 * Represents settings associated with a project
**/
export class ProjectSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainId, form, name=domainId;" })
  domainId?: string;
}
