import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObAddressTypeCodeEnum } from "./obaddresstypecodeenum";
import { ObExternalPartyType1CodeEnum } from "./obexternalpartytype1codeenum";
import { ObPartyRelationships1 } from "./obpartyrelationships1";



// ObParty2Address
/** 
 * Postal address of a party.
**/
export class ObParty2Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressLine" })
  addressLine?: string[];

  @SpeakeasyMetadata({ data: "json, name=AddressType" })
  addressType?: ObAddressTypeCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=BuildingNumber" })
  buildingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=CountrySubDivision" })
  countrySubDivision?: string;

  @SpeakeasyMetadata({ data: "json, name=PostCode" })
  postCode?: string;

  @SpeakeasyMetadata({ data: "json, name=StreetName" })
  streetName?: string;

  @SpeakeasyMetadata({ data: "json, name=TownName" })
  townName?: string;
}


export class ObParty2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountRole" })
  accountRole?: string;

  @SpeakeasyMetadata({ data: "json, name=Address", elemType: ObParty2Address })
  address?: ObParty2Address[];

  @SpeakeasyMetadata({ data: "json, name=BeneficialOwnership" })
  beneficialOwnership?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=FullLegalName" })
  fullLegalName?: string;

  @SpeakeasyMetadata({ data: "json, name=LegalStructure" })
  legalStructure?: string;

  @SpeakeasyMetadata({ data: "json, name=Mobile" })
  mobile?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PartyId" })
  partyId: string;

  @SpeakeasyMetadata({ data: "json, name=PartyNumber" })
  partyNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=PartyType" })
  partyType?: ObExternalPartyType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=Relationships" })
  relationships?: ObPartyRelationships1;
}
