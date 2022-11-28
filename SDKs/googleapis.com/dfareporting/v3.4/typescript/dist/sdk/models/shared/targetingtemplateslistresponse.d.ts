import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingTemplate } from "./targetingtemplate";
/**
 * Targeting Template List Response
**/
export declare class TargetingTemplatesListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    targetingTemplates?: TargetingTemplate[];
}
