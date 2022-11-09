import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CutoffTime } from "./cutofftime";
import { BusinessDayConfig } from "./businessdayconfig";
import { HolidayCutoff } from "./holidaycutoff";
import { BusinessDayConfig } from "./businessdayconfig";
import { TransitTable } from "./transittable";
import { WarehouseBasedDeliveryTime } from "./warehousebaseddeliverytime";


export class DeliveryTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=cutoffTime" })
  cutoffTime?: CutoffTime;

  @Metadata({ data: "json, name=handlingBusinessDayConfig" })
  handlingBusinessDayConfig?: BusinessDayConfig;

  @Metadata({ data: "json, name=holidayCutoffs", elemType: shared.HolidayCutoff })
  holidayCutoffs?: HolidayCutoff[];

  @Metadata({ data: "json, name=maxHandlingTimeInDays" })
  maxHandlingTimeInDays?: number;

  @Metadata({ data: "json, name=maxTransitTimeInDays" })
  maxTransitTimeInDays?: number;

  @Metadata({ data: "json, name=minHandlingTimeInDays" })
  minHandlingTimeInDays?: number;

  @Metadata({ data: "json, name=minTransitTimeInDays" })
  minTransitTimeInDays?: number;

  @Metadata({ data: "json, name=transitBusinessDayConfig" })
  transitBusinessDayConfig?: BusinessDayConfig;

  @Metadata({ data: "json, name=transitTimeTable" })
  transitTimeTable?: TransitTable;

  @Metadata({ data: "json, name=warehouseBasedDeliveryTimes", elemType: shared.WarehouseBasedDeliveryTime })
  warehouseBasedDeliveryTimes?: WarehouseBasedDeliveryTime[];
}
