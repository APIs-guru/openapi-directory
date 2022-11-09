import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceInfo } from "./deviceinfo";
import { DeviceNames } from "./devicenames";
import { AgentOtherDeviceId } from "./agentotherdeviceid";


// Device
/** 
 * Third-party device definition. Next ID = 14
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=customData" })
  customData?: Map<string, any>;

  @Metadata({ data: "json, name=deviceInfo" })
  deviceInfo?: DeviceInfo;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: DeviceNames;

  @Metadata({ data: "json, name=notificationSupportedByAgent" })
  notificationSupportedByAgent?: boolean;

  @Metadata({ data: "json, name=otherDeviceIds", elemType: shared.AgentOtherDeviceId })
  otherDeviceIds?: AgentOtherDeviceId[];

  @Metadata({ data: "json, name=roomHint" })
  roomHint?: string;

  @Metadata({ data: "json, name=structureHint" })
  structureHint?: string;

  @Metadata({ data: "json, name=traits" })
  traits?: string[];

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=willReportState" })
  willReportState?: boolean;
}
