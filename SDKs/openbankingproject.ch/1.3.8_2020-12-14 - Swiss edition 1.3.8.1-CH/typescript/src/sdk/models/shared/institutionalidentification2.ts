import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstitutionalIdentification2
/** 
 * Institiutional identification of a bank (Clearing System Member ID)
 * adapted from ISO pain.001.001.03.ch.02 ClearingSystemMemberIdentification2
 * 
**/
export class InstitutionalIdentification2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clearingSystemIdCode" })
  clearingSystemIdCode: string;

  @SpeakeasyMetadata({ data: "json, name=clearingSystemMemberId" })
  clearingSystemMemberId: string;
}
