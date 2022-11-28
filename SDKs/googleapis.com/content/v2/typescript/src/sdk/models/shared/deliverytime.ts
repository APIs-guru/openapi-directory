import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CutoffTime } from "./cutofftime";
import { BusinessDayConfig } from "./businessdayconfig";
import { HolidayCutoff } from "./holidaycutoff";
import { TransitTable } from "./transittable";
import { WarehouseBasedDeliveryTime } from "./warehousebaseddeliverytime";



export class DeliveryTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cutoffTime" })
  cutoffTime?: CutoffTime;

  @SpeakeasyMetadata({ data: "json, name=handlingBusinessDayConfig" })
  handlingBusinessDayConfig?: BusinessDayConfig;

  @SpeakeasyMetadata({ data: "json, name=holidayCutoffs", elemType: HolidayCutoff })
  holidayCutoffs?: HolidayCutoff[];

  @SpeakeasyMetadata({ data: "json, name=maxHandlingTimeInDays" })
  maxHandlingTimeInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=maxTransitTimeInDays" })
  maxTransitTimeInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=minHandlingTimeInDays" })
  minHandlingTimeInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=minTransitTimeInDays" })
  minTransitTimeInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=transitBusinessDayConfig" })
  transitBusinessDayConfig?: BusinessDayConfig;

  @SpeakeasyMetadata({ data: "json, name=transitTimeTable" })
  transitTimeTable?: TransitTable;

  @SpeakeasyMetadata({ data: "json, name=warehouseBasedDeliveryTimes", elemType: WarehouseBasedDeliveryTime })
  warehouseBasedDeliveryTimes?: WarehouseBasedDeliveryTime[];
}
