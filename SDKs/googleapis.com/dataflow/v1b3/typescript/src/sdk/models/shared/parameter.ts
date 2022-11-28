import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Parameter
/** 
 * Structured data associated with this message.
**/
export class Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}
