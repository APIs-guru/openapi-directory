import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObError1 } from "./oberror1";



// ObErrorResponse1
/** 
 * An array of detail error codes, and messages, and URLs to documentation to help remediation.
**/
export class ObErrorResponse1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: ObError1 })
  errors: ObError1[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message: string;
}
