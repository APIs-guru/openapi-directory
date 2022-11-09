import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityMarks
/** 
 * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
**/
export class SecurityMarks extends SpeakeasyBase {
  @Metadata({ data: "json, name=canonicalName" })
  canonicalName?: string;

  @Metadata({ data: "json, name=marks" })
  marks?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
