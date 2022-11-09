import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Lien
/** 
 * A Lien represents an encumbrance on the actions that can be performed on a resource.
**/
export class Lien extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=origin" })
  origin?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: string[];
}
