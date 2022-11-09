import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReturnAddressAddress } from "./returnaddressaddress";


// ReturnAddress
/** 
 * Return address resource.
**/
export class ReturnAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: ReturnAddressAddress;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=returnAddressId" })
  returnAddressId?: string;
}
