import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Lien
/** 
 * A Lien represents an encumbrance on the actions that can be performed on a resource.
**/
export class Lien extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions?: string[];
}
