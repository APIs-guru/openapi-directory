import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResponseHeader
/** 
 * Elements common to every response.
**/
export class ResponseHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationId" })
  operationId?: string;
}
