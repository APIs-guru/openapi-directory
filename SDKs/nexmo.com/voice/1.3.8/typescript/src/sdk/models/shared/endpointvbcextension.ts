import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointVbcExtension
/** 
 * Connect to a VBC extension
**/
export class EndpointVbcExtension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
