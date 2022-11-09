import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstitutionalIdentification2
/** 
 * Institiutional identification of a bank (Clearing System Member ID)
 * adapted from ISO pain.001.001.03.ch.02 ClearingSystemMemberIdentification2
 * 
**/
export class InstitutionalIdentification2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=clearingSystemIdCode" })
  clearingSystemIdCode: string;

  @Metadata({ data: "json, name=clearingSystemMemberId" })
  clearingSystemMemberId: string;
}
