import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Lake } from "./lake";
/**
 * Specifies how metastore metadata should be integrated with the Dataplex service.
**/
export declare class DataplexConfig extends SpeakeasyBase {
    lakeResources?: Map<string, Lake>;
}
