import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedValue } from "./typedvalue";
import { CollectdValue } from "./collectdvalue";



// CollectdPayload
/** 
 * A collection of data points sent from a collectd-based plugin. See the collectd documentation for more information.
**/
export class CollectdPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: TypedValue })
  metadata?: Map<string, TypedValue>;

  @SpeakeasyMetadata({ data: "json, name=plugin" })
  plugin?: string;

  @SpeakeasyMetadata({ data: "json, name=pluginInstance" })
  pluginInstance?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=typeInstance" })
  typeInstance?: string;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: CollectdValue })
  values?: CollectdValue[];
}
