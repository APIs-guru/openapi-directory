import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BadResponse } from "./badresponse";


// BadResponsesFaultConfig
/** 
 * Config for bad requests injection fault
**/
export class BadResponsesFaultConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ratio" })
  ratio: number;

  @Metadata({ data: "json, name=responses", elemType: shared.BadResponse })
  responses: BadResponse[];
}
