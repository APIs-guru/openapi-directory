import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Lake } from "./lake";



// DataplexConfig
/** 
 * Specifies how metastore metadata should be integrated with the Dataplex service.
**/
export class DataplexConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lakeResources", elemType: Lake })
  lakeResources?: Map<string, Lake>;
}
