import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisplayData
/** 
 * Data provided with a pipeline or transform to provide descriptive info.
**/
export class DisplayData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=durationValue" })
  durationValue?: string;

  @SpeakeasyMetadata({ data: "json, name=floatValue" })
  floatValue?: number;

  @SpeakeasyMetadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @SpeakeasyMetadata({ data: "json, name=javaClassValue" })
  javaClassValue?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=shortStrValue" })
  shortStrValue?: string;

  @SpeakeasyMetadata({ data: "json, name=strValue" })
  strValue?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampValue" })
  timestampValue?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
