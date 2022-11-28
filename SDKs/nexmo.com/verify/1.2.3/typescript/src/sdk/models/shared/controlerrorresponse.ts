import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ControlErrorResponseStatusEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Eight = "8",
    Nine = "9",
    Nineteen = "19"
}


// ControlErrorResponse
/** 
 * Error
**/
export class ControlErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_text" })
  errorText?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ControlErrorResponseStatusEnum;
}
