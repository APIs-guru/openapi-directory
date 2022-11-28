import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for gzip of service responses
**/
export declare class Gzip extends SpeakeasyBase {
    blackList: string[];
    bufferSize: number;
    chunkedThreshold: number;
    compressionLevel: number;
    enabled: boolean;
    excludedPatterns: string[];
    whiteList: string[];
}
