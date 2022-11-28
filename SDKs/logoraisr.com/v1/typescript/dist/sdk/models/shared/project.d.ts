import { SpeakeasyBase } from "../../../internal/utils";
import { Process } from "./process";
export declare class Project extends SpeakeasyBase {
    created?: Date;
    fileId?: string;
    id?: number;
    paypalPaymentId?: string;
    process?: Process;
    processId: string;
    projectNumber?: number;
    projectTitle?: string;
    resultFileId?: string;
}
