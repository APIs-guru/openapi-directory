import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckConsistencyResponse
/** 
 * Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
**/
export class CheckConsistencyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consistent" })
  consistent?: boolean;
}
