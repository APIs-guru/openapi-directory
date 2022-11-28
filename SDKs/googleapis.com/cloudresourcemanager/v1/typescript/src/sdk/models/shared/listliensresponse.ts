import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Lien } from "./lien";



// ListLiensResponse
/** 
 * The response message for Liens.ListLiens.
**/
export class ListLiensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=liens", elemType: Lien })
  liens?: Lien[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
