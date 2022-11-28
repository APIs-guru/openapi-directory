import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentLabel extends SpeakeasyBase {
    automlModel?: string;
    confidence?: number;
    name?: string;
}
