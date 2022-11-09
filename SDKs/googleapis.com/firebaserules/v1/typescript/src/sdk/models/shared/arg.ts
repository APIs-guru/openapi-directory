import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Arg
/** 
 * Arg matchers for the mock function.
**/
export class Arg extends SpeakeasyBase {
  @Metadata({ data: "json, name=anyValue" })
  anyValue?: Map<string, any>;

  @Metadata({ data: "json, name=exactValue" })
  exactValue?: any;
}
