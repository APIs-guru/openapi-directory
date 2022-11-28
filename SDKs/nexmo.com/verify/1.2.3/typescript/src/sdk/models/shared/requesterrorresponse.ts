import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RequestErrorResponseStatusEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Fifteen = "15",
    Twenty = "20",
    TwentyNine = "29"
}


// RequestErrorResponse
/** 
 * Error
**/
export class RequestErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_text" })
  errorText?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RequestErrorResponseStatusEnum;
}
