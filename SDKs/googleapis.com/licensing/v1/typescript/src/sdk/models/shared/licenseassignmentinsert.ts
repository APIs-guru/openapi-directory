import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LicenseAssignmentInsert
/** 
 * Representation of a license assignment.
**/
export class LicenseAssignmentInsert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
