import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum CheckErrorResponseStatusEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Sixteen = "16",
    Seventeen = "17"
}
/**
 * Error
**/
export declare class CheckErrorResponse extends SpeakeasyBase {
    errorText?: string;
    requestId?: string;
    status?: CheckErrorResponseStatusEnum;
}
