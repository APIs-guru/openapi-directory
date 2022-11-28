import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentChange } from "./documentchange";
import { DocumentDelete } from "./documentdelete";
import { DocumentRemove } from "./documentremove";
import { ExistenceFilter } from "./existencefilter";
import { TargetChange } from "./targetchange";
/**
 * The response for Firestore.Listen.
**/
export declare class ListenResponse extends SpeakeasyBase {
    documentChange?: DocumentChange;
    documentDelete?: DocumentDelete;
    documentRemove?: DocumentRemove;
    filter?: ExistenceFilter;
    targetChange?: TargetChange;
}
