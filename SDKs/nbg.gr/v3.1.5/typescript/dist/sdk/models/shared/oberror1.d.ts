import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
export declare class ObError1 extends SpeakeasyBase {
    errorCode: ErrorCodeEnum;
    message: string;
    path?: string;
}
