import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CheckConsistencyResponse
/** 
 * Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
**/
export class CheckConsistencyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=consistent" })
  consistent?: boolean;
}
