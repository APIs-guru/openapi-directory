import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
**/
export declare class GoogleSecuritySafebrowsingV4RiceDeltaEncoding extends SpeakeasyBase {
    encodedData?: string;
    firstValue?: string;
    numEntries?: number;
    riceParameter?: number;
}
