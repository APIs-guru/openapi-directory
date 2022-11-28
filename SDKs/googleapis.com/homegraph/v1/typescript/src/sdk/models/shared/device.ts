import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceInfo } from "./deviceinfo";
import { DeviceNames } from "./devicenames";
import { AgentOtherDeviceId } from "./agentotherdeviceid";



// Device
/** 
 * Third-party device definition. Next ID = 14
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=customData" })
  customData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=deviceInfo" })
  deviceInfo?: DeviceInfo;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: DeviceNames;

  @SpeakeasyMetadata({ data: "json, name=notificationSupportedByAgent" })
  notificationSupportedByAgent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=otherDeviceIds", elemType: AgentOtherDeviceId })
  otherDeviceIds?: AgentOtherDeviceId[];

  @SpeakeasyMetadata({ data: "json, name=roomHint" })
  roomHint?: string;

  @SpeakeasyMetadata({ data: "json, name=structureHint" })
  structureHint?: string;

  @SpeakeasyMetadata({ data: "json, name=traits" })
  traits?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=willReportState" })
  willReportState?: boolean;
}
