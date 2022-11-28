import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { Volume } from "./volume";
/**
 * TaskSpec is a description of a task.
**/
export declare class TaskSpec extends SpeakeasyBase {
    containers?: Container[];
    maxRetries?: number;
    serviceAccountName?: string;
    timeoutSeconds?: string;
    volumes?: Volume[];
}
