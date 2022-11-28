import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomHttpPattern
/** 
 * A custom pattern is used for defining custom HTTP verb.
**/
export class CustomHttpPattern extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
