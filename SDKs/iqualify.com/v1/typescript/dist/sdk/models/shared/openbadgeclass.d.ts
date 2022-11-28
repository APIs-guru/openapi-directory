import { SpeakeasyBase } from "../../../internal/utils";
export declare class OpenBadgeClassCriteria extends SpeakeasyBase {
    narrative?: string;
}
export declare class OpenBadgeClass extends SpeakeasyBase {
    criteria?: OpenBadgeClassCriteria;
    description?: string;
    id?: string;
    image?: string;
    issuer?: string;
    name?: string;
    type?: string;
}
