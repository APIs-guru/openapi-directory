import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoTeardownTaskConfig } from "./enterprisecrmeventbusprototeardowntaskconfig";



export class EnterpriseCrmEventbusProtoTeardown extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=teardownTaskConfigs", elemType: EnterpriseCrmEventbusProtoTeardownTaskConfig })
  teardownTaskConfigs?: EnterpriseCrmEventbusProtoTeardownTaskConfig[];
}
