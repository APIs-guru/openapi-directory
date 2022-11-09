import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObError1 } from "./oberror1";


// ObErrorResponse1
/** 
 * An array of detail error codes, and messages, and URLs to documentation to help remediation.
**/
export class ObErrorResponse1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code: string;

  @Metadata({ data: "json, name=Errors", elemType: shared.ObError1 })
  errors: ObError1[];

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Message" })
  message: string;
}
