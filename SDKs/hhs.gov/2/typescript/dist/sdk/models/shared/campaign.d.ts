import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
export declare class Campaign extends SpeakeasyBase {
    contactEmail?: string;
    description?: string;
    endDate?: Date;
    id?: number;
    name?: string;
    source?: Source;
    startDate?: Date;
}
