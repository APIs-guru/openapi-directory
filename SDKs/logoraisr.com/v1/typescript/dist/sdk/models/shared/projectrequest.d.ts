import { SpeakeasyBase } from "../../../internal/utils";
import { Process } from "./process";
export declare class ProjectRequest extends SpeakeasyBase {
    fileId: string;
    process?: Process;
    projectTitle: string;
}
