import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBodyPatch } from "./cardfetchbodypatch";


// CardPatchRequest
/** 
 * Body for a patch with optional fields
**/
export class CardPatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions" })
  actions?: CardActions;

  @Metadata({ data: "json, name=display" })
  display?: CardDisplayBody;

  @Metadata({ data: "json, name=fetch" })
  fetch?: CardFetchBodyPatch;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
