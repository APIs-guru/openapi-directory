import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoNextTeardownTask } from "./enterprisecrmeventbusprotonextteardowntask";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoEventBusProperties } from "./enterprisecrmeventbusprotoeventbusproperties";


export class EnterpriseCrmEventbusProtoTeardownTaskConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=creatorEmail" })
  creatorEmail?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nextTeardownTask" })
  nextTeardownTask?: EnterpriseCrmEventbusProtoNextTeardownTask;

  @Metadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmEventbusProtoEventParameters;

  @Metadata({ data: "json, name=properties" })
  properties?: EnterpriseCrmEventbusProtoEventBusProperties;

  @Metadata({ data: "json, name=teardownTaskImplementationClassName" })
  teardownTaskImplementationClassName?: string;
}
