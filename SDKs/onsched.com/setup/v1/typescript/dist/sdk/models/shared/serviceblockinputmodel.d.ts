import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatInputModel } from "./repeatinputmodel";
export declare class ServiceBlockInputModel extends SpeakeasyBase {
    endDate?: Date;
    endTime?: number;
    locationId?: string;
    reason?: string;
    repeat?: RepeatInputModel;
    repeats?: boolean;
    startDate?: Date;
    startTime?: number;
}
