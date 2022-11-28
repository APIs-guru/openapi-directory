import { SpeakeasyBase } from "../../../internal/utils";
import { OfferingProgressRow } from "./offeringprogressrow";
export declare class LearnerResponse extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    offerings?: OfferingProgressRow[];
    personId?: string;
}
