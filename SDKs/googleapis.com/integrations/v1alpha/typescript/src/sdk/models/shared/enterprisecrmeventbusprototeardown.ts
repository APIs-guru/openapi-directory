import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoTeardownTaskConfig } from "./enterprisecrmeventbusprototeardowntaskconfig";


export class EnterpriseCrmEventbusProtoTeardown extends SpeakeasyBase {
  @Metadata({ data: "json, name=teardownTaskConfigs", elemType: shared.EnterpriseCrmEventbusProtoTeardownTaskConfig })
  teardownTaskConfigs?: EnterpriseCrmEventbusProtoTeardownTaskConfig[];
}
