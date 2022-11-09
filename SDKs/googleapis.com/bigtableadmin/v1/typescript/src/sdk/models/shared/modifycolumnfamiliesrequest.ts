import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Modification } from "./modification";


// ModifyColumnFamiliesRequest
/** 
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies
**/
export class ModifyColumnFamiliesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=modifications", elemType: shared.Modification })
  modifications?: Modification[];
}
