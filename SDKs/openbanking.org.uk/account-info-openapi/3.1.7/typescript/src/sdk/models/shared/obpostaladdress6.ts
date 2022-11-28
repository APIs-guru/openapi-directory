import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObAddressTypeCodeEnum } from "./obaddresstypecodeenum";



// ObPostalAddress6
/** 
 * Information that locates and identifies a specific address, as defined by postal services.
**/
export class ObPostalAddress6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressLine" })
  addressLine?: string[];

  @SpeakeasyMetadata({ data: "json, name=AddressType" })
  addressType?: ObAddressTypeCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=BuildingNumber" })
  buildingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=CountrySubDivision" })
  countrySubDivision?: string;

  @SpeakeasyMetadata({ data: "json, name=Department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=PostCode" })
  postCode?: string;

  @SpeakeasyMetadata({ data: "json, name=StreetName" })
  streetName?: string;

  @SpeakeasyMetadata({ data: "json, name=SubDepartment" })
  subDepartment?: string;

  @SpeakeasyMetadata({ data: "json, name=TownName" })
  townName?: string;
}
