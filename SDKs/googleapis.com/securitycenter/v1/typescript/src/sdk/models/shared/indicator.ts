import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessSignature } from "./processsignature";



// Indicator
/** 
 * Represents what's commonly known as an Indicator of compromise (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. Reference: https://en.wikipedia.org/wiki/Indicator_of_compromise
**/
export class Indicator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=ipAddresses" })
  ipAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=signatures", elemType: ProcessSignature })
  signatures?: ProcessSignature[];

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];
}
