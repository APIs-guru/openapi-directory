import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cvssv3 } from "./cvssv3";
import { Reference } from "./reference";


// Cve
/** 
 * CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org
**/
export class Cve extends SpeakeasyBase {
  @Metadata({ data: "json, name=cvssv3" })
  cvssv3?: Cvssv3;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=references", elemType: shared.Reference })
  references?: Reference[];

  @Metadata({ data: "json, name=upstreamFixAvailable" })
  upstreamFixAvailable?: boolean;
}
