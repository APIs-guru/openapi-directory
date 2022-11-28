import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatViewModel } from "./repeatviewmodel";
export declare class ServiceBlockViewModel extends SpeakeasyBase {
    deletedStatus?: boolean;
    deletedTime?: string;
    endDate?: Date;
    endTime?: number;
    id?: string;
    locationId?: string;
    objectName?: string;
    reason?: string;
    repeat?: RepeatViewModel;
    repeats?: boolean;
    serviceId?: string;
    startDate?: Date;
    startTime?: number;
}
