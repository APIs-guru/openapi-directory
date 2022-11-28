import { SpeakeasyBase } from "../../../internal/utils";
import { PulseMcqOption } from "./pulsemcqoption";
import { PulseSpatialOption } from "./pulsespatialoption";
export declare class PulseAnswer extends SpeakeasyBase {
    multiChoiceAnswer?: PulseMcqOption[];
    spatialAnswer?: PulseSpatialOption[];
    textAnswer?: string;
}
