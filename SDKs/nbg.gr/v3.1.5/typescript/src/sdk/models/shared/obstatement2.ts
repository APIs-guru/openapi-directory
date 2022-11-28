import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObExternalStatementType1CodeEnum } from "./obexternalstatementtype1codeenum";



// ObStatement2
/** 
 * Provides further details on a statement resource.
**/
export class ObStatement2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndDateTime" })
  endDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=StartDateTime" })
  startDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=StatementId" })
  statementId?: string;

  @SpeakeasyMetadata({ data: "json, name=StatementReference" })
  statementReference?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ObExternalStatementType1CodeEnum;
}
