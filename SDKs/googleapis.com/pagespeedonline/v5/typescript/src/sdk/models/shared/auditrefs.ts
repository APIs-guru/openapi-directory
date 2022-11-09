import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuditRefs
/** 
 * A light reference to an audit by id, used to group and weight audits in a given category.
**/
export class AuditRefs extends SpeakeasyBase {
  @Metadata({ data: "json, name=acronym" })
  acronym?: string;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=relevantAudits" })
  relevantAudits?: string[];

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
