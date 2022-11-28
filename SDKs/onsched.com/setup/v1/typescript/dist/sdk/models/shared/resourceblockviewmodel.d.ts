import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatViewModel } from "./repeatviewmodel";
export declare class ResourceBlockViewModel extends SpeakeasyBase {
    businessId?: number;
    endDate?: Date;
    endTime?: number;
    id?: number;
    objectName?: string;
    reason?: string;
    repeat?: RepeatViewModel;
    repeats?: boolean;
    resourceId?: number;
    startDate?: Date;
    startTime?: number;
}
