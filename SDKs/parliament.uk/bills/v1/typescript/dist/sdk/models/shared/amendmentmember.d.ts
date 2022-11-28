import { SpeakeasyBase } from "../../../internal/utils";
import { HouseEnum } from "./houseenum";
export declare class AmendmentMember extends SpeakeasyBase {
    house?: HouseEnum;
    isLead?: boolean;
    memberFrom?: string;
    memberId?: number;
    memberPage?: string;
    memberPhoto?: string;
    name?: string;
    party?: string;
    partyColour?: string;
    sortOrder?: number;
}
