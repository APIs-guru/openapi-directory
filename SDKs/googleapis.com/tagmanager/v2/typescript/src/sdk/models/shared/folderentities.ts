import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";


// FolderEntities
/** 
 * Represents a Google Tag Manager Folder's contents.
**/
export class FolderEntities extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tag", elemType: shared.Tag })
  tag?: Tag[];

  @Metadata({ data: "json, name=trigger", elemType: shared.Trigger })
  trigger?: Trigger[];

  @Metadata({ data: "json, name=variable", elemType: shared.Variable })
  variable?: Variable[];
}
