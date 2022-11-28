import { SpeakeasyBase } from "../../../internal/utils";
import { AmendmentLine } from "./amendmentline";
import { AmendmentTypeEnum } from "./amendmenttypeenum";
import { AmendmentDecisionEnum } from "./amendmentdecisionenum";
import { AmendmentMember } from "./amendmentmember";
export declare class AmendmentDetail extends SpeakeasyBase {
    amendmentId?: number;
    amendmentLines?: AmendmentLine[];
    amendmentNote?: string;
    amendmentPosition?: string;
    amendmentType?: AmendmentTypeEnum;
    billId?: number;
    billStageId?: number;
    clause?: number;
    decision?: AmendmentDecisionEnum;
    explanatoryText?: string;
    explanatoryTextPrefix?: string;
    lineNumber?: number;
    marshalledListText?: string;
    pageNumber?: number;
    schedule?: number;
    sponsors?: AmendmentMember[];
}
