import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of properties that uniquely identify a given Docker image.
**/
export declare class Fingerprint extends SpeakeasyBase {
    v1Name?: string;
    v2Blob?: string[];
    v2Name?: string;
}
