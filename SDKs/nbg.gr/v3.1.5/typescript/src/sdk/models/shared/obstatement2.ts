import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObExternalStatementType1CodeEnum } from "./obexternalstatementtype1codeenum";


// ObStatement2
/** 
 * Provides further details on a statement resource.
**/
export class ObStatement2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime: Date;

  @Metadata({ data: "json, name=StartDateTime" })
  startDateTime: Date;

  @Metadata({ data: "json, name=StatementId" })
  statementId?: string;

  @Metadata({ data: "json, name=StatementReference" })
  statementReference?: string;

  @Metadata({ data: "json, name=Type" })
  type: ObExternalStatementType1CodeEnum;
}
