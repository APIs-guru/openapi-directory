import { SpeakeasyBase } from "../../../internal/utils";
import { TypedValue } from "./typedvalue";
import { CollectdValue } from "./collectdvalue";
/**
 * A collection of data points sent from a collectd-based plugin. See the collectd documentation for more information.
**/
export declare class CollectdPayload extends SpeakeasyBase {
    endTime?: string;
    metadata?: Map<string, TypedValue>;
    plugin?: string;
    pluginInstance?: string;
    startTime?: string;
    type?: string;
    typeInstance?: string;
    values?: CollectdValue[];
}
