import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { TimeWindow } from "./timewindow";
export declare class Stop extends SpeakeasyBase {
    address?: Address;
    duration?: number;
    group?: string;
    preparationTime?: number;
    timeWindows?: TimeWindow[];
}
