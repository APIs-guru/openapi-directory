import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Deployment contains the deployment identification information.
**/
export declare class Deployment extends SpeakeasyBase {
    labels?: Map<string, string>;
    projectId?: string;
    target?: string;
}
