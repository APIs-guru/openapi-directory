import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessSignature } from "./processsignature";
/**
 * Represents what's commonly known as an Indicator of compromise (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. Reference: https://en.wikipedia.org/wiki/Indicator_of_compromise
**/
export declare class Indicator extends SpeakeasyBase {
    domains?: string[];
    ipAddresses?: string[];
    signatures?: ProcessSignature[];
    uris?: string[];
}
