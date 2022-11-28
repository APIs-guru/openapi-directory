import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Arg
/** 
 * Arg matchers for the mock function.
**/
export class Arg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anyValue" })
  anyValue?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=exactValue" })
  exactValue?: any;
}
