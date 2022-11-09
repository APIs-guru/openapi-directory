import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PostalAddress } from "./postaladdress";


// ServiceBusinessContext
/** 
 * Additional data for service business verification.
**/
export class ServiceBusinessContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PostalAddress;
}
