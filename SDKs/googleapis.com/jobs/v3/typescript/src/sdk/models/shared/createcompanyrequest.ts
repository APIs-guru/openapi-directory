import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Company } from "./company";


// CreateCompanyRequest
/** 
 * Input only. The Request of the CreateCompany method.
**/
export class CreateCompanyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=company" })
  company?: Company;
}
