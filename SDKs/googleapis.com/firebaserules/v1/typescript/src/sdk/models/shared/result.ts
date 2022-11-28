import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Result
/** 
 * Possible result values from the function mock invocation.
**/
export class Result extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=undefined" })
  undefined?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}
