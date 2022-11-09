import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=documentChange" })
  documentChange?: DocumentChange;

  @Metadata({ data: "json, name=documentDelete" })
  documentDelete?: DocumentDelete;

  @Metadata({ data: "json, name=documentRemove" })
  documentRemove?: DocumentRemove;

  @Metadata({ data: "json, name=filter" })
  filter?: ExistenceFilter;

  @Metadata({ data: "json, name=targetChange" })
  targetChange?: TargetChange;
}
