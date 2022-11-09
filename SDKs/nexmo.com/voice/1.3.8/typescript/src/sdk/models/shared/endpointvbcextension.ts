import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointVbcExtension
/** 
 * Connect to a VBC extension
**/
export class EndpointVbcExtension extends SpeakeasyBase {
  @Metadata({ data: "json, name=extension" })
  extension: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
