import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HeldOrgUnit
/** 
 * The organizational unit covered by a hold. This structure is immutable.
**/
export class HeldOrgUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=holdTime" })
  holdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;
}
