import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoNextTeardownTask } from "./enterprisecrmeventbusprotonextteardowntask";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoEventBusProperties } from "./enterprisecrmeventbusprotoeventbusproperties";
export declare class EnterpriseCrmEventbusProtoTeardownTaskConfig extends SpeakeasyBase {
    creatorEmail?: string;
    name?: string;
    nextTeardownTask?: EnterpriseCrmEventbusProtoNextTeardownTask;
    parameters?: EnterpriseCrmEventbusProtoEventParameters;
    properties?: EnterpriseCrmEventbusProtoEventBusProperties;
    teardownTaskImplementationClassName?: string;
}
