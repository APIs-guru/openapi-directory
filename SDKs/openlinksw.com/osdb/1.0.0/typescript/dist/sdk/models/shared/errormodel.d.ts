import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ErrorModelStatusEnum {
    Error = "error"
}
export declare class ErrorModel extends SpeakeasyBase {
    api?: string;
    method?: string;
    response?: string;
    status?: ErrorModelStatusEnum;
}
