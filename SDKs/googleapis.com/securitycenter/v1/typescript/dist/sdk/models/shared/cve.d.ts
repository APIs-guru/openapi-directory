import { SpeakeasyBase } from "../../../internal/utils";
import { Cvssv3 } from "./cvssv3";
import { Reference } from "./reference";
/**
 * CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org
**/
export declare class Cve extends SpeakeasyBase {
    cvssv3?: Cvssv3;
    id?: string;
    references?: Reference[];
    upstreamFixAvailable?: boolean;
}
