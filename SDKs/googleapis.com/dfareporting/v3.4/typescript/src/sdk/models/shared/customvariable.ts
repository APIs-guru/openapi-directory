import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomVariable
/** 
 * Custom variable.
**/
export class CustomVariable extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
