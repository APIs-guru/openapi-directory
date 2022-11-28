import { SpeakeasyBase } from "../../../internal/utils";
import { HouseEnum } from "./houseenum";
export declare class Member extends SpeakeasyBase {
    house?: HouseEnum;
    memberFrom?: string;
    memberId?: number;
    memberPage?: string;
    memberPhoto?: string;
    name?: string;
    party?: string;
    partyColour?: string;
}
