import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";



// DatabasesListResponse
/** 
 * Database list response.
**/
export class DatabasesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Database })
  items?: Database[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
