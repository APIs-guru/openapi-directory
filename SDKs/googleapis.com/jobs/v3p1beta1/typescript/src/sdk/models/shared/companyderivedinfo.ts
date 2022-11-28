import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// CompanyDerivedInfo
/** 
 * Derived details about the company.
**/
export class CompanyDerivedInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headquartersLocation" })
  headquartersLocation?: Location;
}
