import { SpeakeasyBase } from "../../../internal/utils";
import { ExfilResource } from "./exfilresource";
/**
 * Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.
**/
export declare class Exfiltration extends SpeakeasyBase {
    sources?: ExfilResource[];
    targets?: ExfilResource[];
}
