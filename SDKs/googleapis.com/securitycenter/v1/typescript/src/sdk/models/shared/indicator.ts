import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProcessSignature } from "./processsignature";


// Indicator
/** 
 * Represents what's commonly known as an Indicator of compromise (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. Reference: https://en.wikipedia.org/wiki/Indicator_of_compromise
**/
export class Indicator extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains" })
  domains?: string[];

  @Metadata({ data: "json, name=ipAddresses" })
  ipAddresses?: string[];

  @Metadata({ data: "json, name=signatures", elemType: shared.ProcessSignature })
  signatures?: ProcessSignature[];

  @Metadata({ data: "json, name=uris" })
  uris?: string[];
}
