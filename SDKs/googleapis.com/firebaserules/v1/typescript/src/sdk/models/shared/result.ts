import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Result
/** 
 * Possible result values from the function mock invocation.
**/
export class Result extends SpeakeasyBase {
  @Metadata({ data: "json, name=undefined" })
  undefined?: Map<string, any>;

  @Metadata({ data: "json, name=value" })
  value?: any;
}
