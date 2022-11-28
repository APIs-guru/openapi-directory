import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceProfileTypeEnum } from "./deviceprofiletypeenum";



export class DeviceProfileInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: DeviceProfileTypeEnum;
}
