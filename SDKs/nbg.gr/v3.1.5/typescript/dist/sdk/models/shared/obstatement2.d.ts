import { SpeakeasyBase } from "../../../internal/utils";
import { ObExternalStatementType1CodeEnum } from "./obexternalstatementtype1codeenum";
/**
 * Provides further details on a statement resource.
**/
export declare class ObStatement2 extends SpeakeasyBase {
    accountId: string;
    creationDateTime: Date;
    endDateTime: Date;
    startDateTime: Date;
    statementId?: string;
    statementReference?: string;
    type: ObExternalStatementType1CodeEnum;
}
