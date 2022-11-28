import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";



// CreateCompanyRequest
/** 
 * Input only. The Request of the CreateCompany method.
**/
export class CreateCompanyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: Company;
}
