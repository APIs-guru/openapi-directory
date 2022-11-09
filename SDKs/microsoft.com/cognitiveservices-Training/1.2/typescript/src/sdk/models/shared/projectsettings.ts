import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectSettings
/** 
 * Represents settings associated with a project
**/
export class ProjectSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainId, form, name=DomainId;" })
  domainId?: string;
}
