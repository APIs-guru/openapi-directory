import { SpeakeasyBase } from "../../../internal/utils";
import { JobTemplate } from "./jobtemplate";
/**
 * Response message for `TranscoderService.ListJobTemplates`.
**/
export declare class ListJobTemplatesResponse extends SpeakeasyBase {
    jobTemplates?: JobTemplate[];
    nextPageToken?: string;
    unreachable?: string[];
}
