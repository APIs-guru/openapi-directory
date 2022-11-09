import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Lake } from "./lake";


// DataplexConfig
/** 
 * Specifies how metastore metadata should be integrated with the Dataplex service.
**/
export class DataplexConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=lakeResources", elemType: shared.Lake })
  lakeResources?: Map<string, Lake>;
}
