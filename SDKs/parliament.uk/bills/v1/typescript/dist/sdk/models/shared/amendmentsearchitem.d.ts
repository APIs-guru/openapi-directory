import { SpeakeasyBase } from "../../../internal/utils";
import { AmendmentTypeEnum } from "./amendmenttypeenum";
import { AmendmentDecisionEnum } from "./amendmentdecisionenum";
import { AmendmentMember } from "./amendmentmember";
export declare class AmendmentSearchItem extends SpeakeasyBase {
    amendmentId?: number;
    amendmentPosition?: string;
    amendmentType?: AmendmentTypeEnum;
    billId?: number;
    billStageId?: number;
    clause?: number;
    decision?: AmendmentDecisionEnum;
    lineNumber?: number;
    marshalledListText?: string;
    pageNumber?: number;
    schedule?: number;
    sponsors?: AmendmentMember[];
    summaryText?: string[];
}
