import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1Value
/** 
 * Data type and value of a parameter.
**/
export class GoogleCloudChannelV1Value extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @SpeakeasyMetadata({ data: "json, name=protoValue" })
  protoValue?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
