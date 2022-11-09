import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetDatabaseDdlResponse
/** 
 * The response for GetDatabaseDdl.
**/
export class GetDatabaseDdlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=statements" })
  statements?: string[];
}
