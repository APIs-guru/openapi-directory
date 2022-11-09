import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsumerProject } from "./consumerproject";
import { RangeReservation } from "./rangereservation";


export class ValidateConsumerConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkServiceNetworkingUsePermission" })
  checkServiceNetworkingUsePermission?: boolean;

  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @Metadata({ data: "json, name=consumerProject" })
  consumerProject?: ConsumerProject;

  @Metadata({ data: "json, name=rangeReservation" })
  rangeReservation?: RangeReservation;

  @Metadata({ data: "json, name=validateNetwork" })
  validateNetwork?: boolean;
}
