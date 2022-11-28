import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentChange } from "./documentchange";
import { DocumentDelete } from "./documentdelete";
import { DocumentRemove } from "./documentremove";
import { ExistenceFilter } from "./existencefilter";
import { TargetChange } from "./targetchange";



// ListenResponse
/** 
 * The response for Firestore.Listen.
**/
export class ListenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentChange" })
  documentChange?: DocumentChange;

  @SpeakeasyMetadata({ data: "json, name=documentDelete" })
  documentDelete?: DocumentDelete;

  @SpeakeasyMetadata({ data: "json, name=documentRemove" })
  documentRemove?: DocumentRemove;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: ExistenceFilter;

  @SpeakeasyMetadata({ data: "json, name=targetChange" })
  targetChange?: TargetChange;
}
