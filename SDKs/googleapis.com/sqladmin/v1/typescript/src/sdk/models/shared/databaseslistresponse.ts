import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Database } from "./database";


// DatabasesListResponse
/** 
 * Database list response.
**/
export class DatabasesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Database })
  items?: Database[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
