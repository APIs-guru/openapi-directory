import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomHttpPattern
/** 
 * A custom pattern is used for defining custom HTTP verb.
**/
export class CustomHttpPattern extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
