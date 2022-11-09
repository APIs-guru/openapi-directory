import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Parameter
/** 
 * Structured data associated with this message.
**/
export class Parameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: any;
}
