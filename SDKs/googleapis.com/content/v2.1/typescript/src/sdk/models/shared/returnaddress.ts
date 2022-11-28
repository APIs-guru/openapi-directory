import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddressAddress } from "./returnaddressaddress";



// ReturnAddress
/** 
 * Return address resource.
**/
export class ReturnAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: ReturnAddressAddress;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=returnAddressId" })
  returnAddressId?: string;
}
