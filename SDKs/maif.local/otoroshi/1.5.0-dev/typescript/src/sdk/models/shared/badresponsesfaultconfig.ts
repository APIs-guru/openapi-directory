import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BadResponse } from "./badresponse";



// BadResponsesFaultConfig
/** 
 * Config for bad requests injection fault
**/
export class BadResponsesFaultConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio: number;

  @SpeakeasyMetadata({ data: "json, name=responses", elemType: BadResponse })
  responses: BadResponse[];
}
