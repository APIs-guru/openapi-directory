import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to cancel an ongoing build.
**/
export declare class CancelBuildRequest extends SpeakeasyBase {
    id?: string;
    name?: string;
    projectId?: string;
}
