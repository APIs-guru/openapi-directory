import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CheckConsistencyRequest
/** 
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
**/
export class CheckConsistencyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consistencyToken" })
  consistencyToken?: string;
}
