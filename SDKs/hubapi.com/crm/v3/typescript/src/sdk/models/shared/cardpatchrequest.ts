import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBodyPatch } from "./cardfetchbodypatch";



// CardPatchRequest
/** 
 * Body for a patch with optional fields
**/
export class CardPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions" })
  actions?: CardActions;

  @SpeakeasyMetadata({ data: "json, name=display" })
  display?: CardDisplayBody;

  @SpeakeasyMetadata({ data: "json, name=fetch" })
  fetch?: CardFetchBodyPatch;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
