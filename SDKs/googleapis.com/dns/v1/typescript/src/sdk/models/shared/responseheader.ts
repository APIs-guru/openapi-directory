import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResponseHeader
/** 
 * Elements common to every response.
**/
export class ResponseHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;
}
