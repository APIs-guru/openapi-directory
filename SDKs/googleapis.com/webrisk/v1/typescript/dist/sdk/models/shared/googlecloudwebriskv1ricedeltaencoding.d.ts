import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
**/
export declare class GoogleCloudWebriskV1RiceDeltaEncoding extends SpeakeasyBase {
    encodedData?: string;
    entryCount?: number;
    firstValue?: string;
    riceParameter?: number;
}
