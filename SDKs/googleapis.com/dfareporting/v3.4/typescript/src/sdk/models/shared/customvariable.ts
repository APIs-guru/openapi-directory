import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomVariable
/** 
 * Custom variable.
**/
export class CustomVariable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
