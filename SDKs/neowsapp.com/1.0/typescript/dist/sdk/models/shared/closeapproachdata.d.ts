import { SpeakeasyBase } from "../../../internal/utils";
import { MissDistance } from "./missdistance";
import { RelVelocity } from "./relvelocity";
export declare class CloseApproachData extends SpeakeasyBase {
    closeApproachDate?: string;
    closeApproachDateFull?: string;
    epochDateCloseApproach?: number;
    missDistance?: MissDistance;
    orbitingBody?: string;
    relativeVelocity?: RelVelocity;
}
