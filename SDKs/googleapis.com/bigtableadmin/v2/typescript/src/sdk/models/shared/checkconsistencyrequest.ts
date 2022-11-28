import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckConsistencyRequest
/** 
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
**/
export class CheckConsistencyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consistencyToken" })
  consistencyToken?: string;
}
