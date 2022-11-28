import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeleteTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Trash = "TRASH",
    PermanentDelete = "PERMANENT_DELETE"
}


// Delete
/** 
 * An object was deleted.
**/
export class Delete extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DeleteTypeEnum;
}
