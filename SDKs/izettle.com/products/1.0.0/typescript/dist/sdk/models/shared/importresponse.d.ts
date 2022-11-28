import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImportResponseStateEnum {
    Importing = "IMPORTING",
    FinishedSuccess = "FINISHED_SUCCESS",
    FinishedFailed = "FINISHED_FAILED"
}
export declare class ImportResponse extends SpeakeasyBase {
    created?: Date;
    errorMessage?: string;
    finished?: Date;
    items?: number;
    state?: ImportResponseStateEnum;
    uuid?: string;
}
