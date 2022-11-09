import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HeldOrgUnit
/** 
 * The organizational unit covered by a hold. This structure is immutable.
**/
export class HeldOrgUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=holdTime" })
  holdTime?: string;

  @Metadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;
}
