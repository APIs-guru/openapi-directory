import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CheckErrorResponseStatusEnum {
    Zero = "0"
,    One = "1"
,    Two = "2"
,    Three = "3"
,    Four = "4"
,    Five = "5"
,    Six = "6"
,    Sixteen = "16"
,    Seventeen = "17"
}


// CheckErrorResponse
/** 
 * Error
**/
export class CheckErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_text" })
  errorText?: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;

  @Metadata({ data: "json, name=status" })
  status?: CheckErrorResponseStatusEnum;
}
