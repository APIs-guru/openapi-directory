import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";



// FolderEntities
/** 
 * Represents a Google Tag Manager Folder's contents.
**/
export class FolderEntities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tag", elemType: Tag })
  tag?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=trigger", elemType: Trigger })
  trigger?: Trigger[];

  @SpeakeasyMetadata({ data: "json, name=variable", elemType: Variable })
  variable?: Variable[];
}
