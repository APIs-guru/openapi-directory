import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ControlErrorResponseStatusEnum {
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
/**
 * Error
**/
export declare class ControlErrorResponse extends SpeakeasyBase {
    errorText?: string;
    status?: ControlErrorResponseStatusEnum;
}
