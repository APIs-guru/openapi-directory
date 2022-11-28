import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoNextTeardownTask } from "./enterprisecrmeventbusprotonextteardowntask";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoEventBusProperties } from "./enterprisecrmeventbusprotoeventbusproperties";



export class EnterpriseCrmEventbusProtoTeardownTaskConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatorEmail" })
  creatorEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nextTeardownTask" })
  nextTeardownTask?: EnterpriseCrmEventbusProtoNextTeardownTask;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: EnterpriseCrmEventbusProtoEventBusProperties;

  @SpeakeasyMetadata({ data: "json, name=teardownTaskImplementationClassName" })
  teardownTaskImplementationClassName?: string;
}
