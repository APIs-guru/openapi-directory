import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuditRefs
/** 
 * A light reference to an audit by id, used to group and weight audits in a given category.
**/
export class AuditRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acronym" })
  acronym?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=relevantAudits" })
  relevantAudits?: string[];

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
