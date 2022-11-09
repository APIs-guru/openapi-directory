import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObAddressTypeCodeEnum } from "./obaddresstypecodeenum";


// ObPostalAddress6
/** 
 * Information that locates and identifies a specific address, as defined by postal services.
**/
export class ObPostalAddress6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressLine" })
  addressLine?: string[];

  @Metadata({ data: "json, name=AddressType" })
  addressType?: ObAddressTypeCodeEnum;

  @Metadata({ data: "json, name=BuildingNumber" })
  buildingNumber?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=CountrySubDivision" })
  countrySubDivision?: string;

  @Metadata({ data: "json, name=Department" })
  department?: string;

  @Metadata({ data: "json, name=PostCode" })
  postCode?: string;

  @Metadata({ data: "json, name=StreetName" })
  streetName?: string;

  @Metadata({ data: "json, name=SubDepartment" })
  subDepartment?: string;

  @Metadata({ data: "json, name=TownName" })
  townName?: string;
}
