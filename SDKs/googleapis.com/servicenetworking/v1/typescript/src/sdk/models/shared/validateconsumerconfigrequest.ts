import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerProject } from "./consumerproject";
import { RangeReservation } from "./rangereservation";



export class ValidateConsumerConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkServiceNetworkingUsePermission" })
  checkServiceNetworkingUsePermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=consumerProject" })
  consumerProject?: ConsumerProject;

  @SpeakeasyMetadata({ data: "json, name=rangeReservation" })
  rangeReservation?: RangeReservation;

  @SpeakeasyMetadata({ data: "json, name=validateNetwork" })
  validateNetwork?: boolean;
}
