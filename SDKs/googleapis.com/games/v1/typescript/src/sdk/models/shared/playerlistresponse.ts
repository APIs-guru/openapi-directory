import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Player } from "./player";


// PlayerListResponse
/** 
 * A third party player list response.
**/
export class PlayerListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Player })
  items?: Player[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
