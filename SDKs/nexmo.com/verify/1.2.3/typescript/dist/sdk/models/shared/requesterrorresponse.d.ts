import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RequestErrorResponseStatusEnum {
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
/**
 * Error
**/
export declare class RequestErrorResponse extends SpeakeasyBase {
    errorText?: string;
    network?: string;
    requestId?: string;
    status?: RequestErrorResponseStatusEnum;
}
