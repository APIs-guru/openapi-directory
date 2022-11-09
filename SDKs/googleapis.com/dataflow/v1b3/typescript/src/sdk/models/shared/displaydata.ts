import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisplayData
/** 
 * Data provided with a pipeline or transform to provide descriptive info.
**/
export class DisplayData extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=durationValue" })
  durationValue?: string;

  @Metadata({ data: "json, name=floatValue" })
  floatValue?: number;

  @Metadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @Metadata({ data: "json, name=javaClassValue" })
  javaClassValue?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=shortStrValue" })
  shortStrValue?: string;

  @Metadata({ data: "json, name=strValue" })
  strValue?: string;

  @Metadata({ data: "json, name=timestampValue" })
  timestampValue?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
