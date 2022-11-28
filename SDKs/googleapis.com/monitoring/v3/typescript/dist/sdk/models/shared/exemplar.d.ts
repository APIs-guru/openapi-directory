import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc.
**/
export declare class Exemplar extends SpeakeasyBase {
    attachments?: Map<string, any>[];
    timestamp?: string;
    value?: number;
}
