import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TypedValue } from "./typedvalue";
import { CollectdValue } from "./collectdvalue";


// CollectdPayload
/** 
 * A collection of data points sent from a collectd-based plugin. See the collectd documentation for more information.
**/
export class CollectdPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=metadata", elemType: shared.TypedValue })
  metadata?: Map<string, TypedValue>;

  @Metadata({ data: "json, name=plugin" })
  plugin?: string;

  @Metadata({ data: "json, name=pluginInstance" })
  pluginInstance?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=typeInstance" })
  typeInstance?: string;

  @Metadata({ data: "json, name=values", elemType: shared.CollectdValue })
  values?: CollectdValue[];
}
