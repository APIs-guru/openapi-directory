import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Input only. Update job request.
**/
export declare class UpdateJobRequest extends SpeakeasyBase {
    job?: Job;
    updateMask?: string;
}
