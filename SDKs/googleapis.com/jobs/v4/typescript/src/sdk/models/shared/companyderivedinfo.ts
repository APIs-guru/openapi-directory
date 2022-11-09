import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// CompanyDerivedInfo
/** 
 * Derived details about the company.
**/
export class CompanyDerivedInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=headquartersLocation" })
  headquartersLocation?: Location;
}
