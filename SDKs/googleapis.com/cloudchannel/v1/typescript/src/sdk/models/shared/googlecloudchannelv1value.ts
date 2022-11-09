import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1Value
/** 
 * Data type and value of a parameter.
**/
export class GoogleCloudChannelV1Value extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @Metadata({ data: "json, name=protoValue" })
  protoValue?: Map<string, any>;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
