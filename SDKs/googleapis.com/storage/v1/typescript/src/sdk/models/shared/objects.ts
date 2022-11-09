import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Object } from "./object";


// Objects
/** 
 * A list of objects.
**/
export class Objects extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Object })
  items?: Object[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=prefixes" })
  prefixes?: string[];
}
