import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Lien } from "./lien";


// ListLiensResponse
/** 
 * The response message for Liens.ListLiens.
**/
export class ListLiensResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=liens", elemType: shared.Lien })
  liens?: Lien[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
