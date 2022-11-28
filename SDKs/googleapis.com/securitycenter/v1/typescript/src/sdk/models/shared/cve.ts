import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cvssv3 } from "./cvssv3";
import { Reference } from "./reference";



// Cve
/** 
 * CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org
**/
export class Cve extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cvssv3" })
  cvssv3?: Cvssv3;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=references", elemType: Reference })
  references?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=upstreamFixAvailable" })
  upstreamFixAvailable?: boolean;
}
