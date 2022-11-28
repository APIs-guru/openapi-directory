import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress } from "./postaladdress";



// ServiceBusinessContext
/** 
 * Additional data for service business verification.
**/
export class ServiceBusinessContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostalAddress;
}
