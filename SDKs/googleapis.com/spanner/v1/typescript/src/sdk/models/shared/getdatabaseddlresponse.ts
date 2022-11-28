import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDatabaseDdlResponse
/** 
 * The response for GetDatabaseDdl.
**/
export class GetDatabaseDdlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statements" })
  statements?: string[];
}
