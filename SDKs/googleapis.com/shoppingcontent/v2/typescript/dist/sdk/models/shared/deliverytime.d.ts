import { SpeakeasyBase } from "../../../internal/utils";
import { CutoffTime } from "./cutofftime";
import { BusinessDayConfig } from "./businessdayconfig";
import { HolidayCutoff } from "./holidaycutoff";
import { TransitTable } from "./transittable";
import { WarehouseBasedDeliveryTime } from "./warehousebaseddeliverytime";
export declare class DeliveryTime extends SpeakeasyBase {
    cutoffTime?: CutoffTime;
    handlingBusinessDayConfig?: BusinessDayConfig;
    holidayCutoffs?: HolidayCutoff[];
    maxHandlingTimeInDays?: number;
    maxTransitTimeInDays?: number;
    minHandlingTimeInDays?: number;
    minTransitTimeInDays?: number;
    transitBusinessDayConfig?: BusinessDayConfig;
    transitTimeTable?: TransitTable;
    warehouseBasedDeliveryTimes?: WarehouseBasedDeliveryTime[];
}
