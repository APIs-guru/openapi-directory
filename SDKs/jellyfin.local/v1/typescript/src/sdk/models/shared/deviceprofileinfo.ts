import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceProfileTypeEnum } from "./deviceprofiletypeenum";


export class DeviceProfileInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: DeviceProfileTypeEnum;
}
