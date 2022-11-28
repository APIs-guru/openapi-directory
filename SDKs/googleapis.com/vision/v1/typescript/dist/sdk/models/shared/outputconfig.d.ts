import { SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";
/**
 * The desired output location and metadata.
**/
export declare class OutputConfig extends SpeakeasyBase {
    batchSize?: number;
    gcsDestination?: GcsDestination;
}
