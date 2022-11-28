import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Modification } from "./modification";



// ModifyColumnFamiliesRequest
/** 
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies
**/
export class ModifyColumnFamiliesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modifications", elemType: Modification })
  modifications?: Modification[];
}
