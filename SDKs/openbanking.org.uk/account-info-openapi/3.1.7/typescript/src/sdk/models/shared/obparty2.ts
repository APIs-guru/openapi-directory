import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObAddressTypeCodeEnum } from "./obaddresstypecodeenum";
import { ObExternalPartyType1CodeEnum } from "./obexternalpartytype1codeenum";
import { ObPartyRelationships1 } from "./obpartyrelationships1";


// ObParty2Address
/** 
 * Postal address of a party.
**/
export class ObParty2Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressLine" })
  addressLine?: string[];

  @Metadata({ data: "json, name=AddressType" })
  addressType?: ObAddressTypeCodeEnum;

  @Metadata({ data: "json, name=BuildingNumber" })
  buildingNumber?: string;

  @Metadata({ data: "json, name=Country" })
  country: string;

  @Metadata({ data: "json, name=CountrySubDivision" })
  countrySubDivision?: string;

  @Metadata({ data: "json, name=PostCode" })
  postCode?: string;

  @Metadata({ data: "json, name=StreetName" })
  streetName?: string;

  @Metadata({ data: "json, name=TownName" })
  townName?: string;
}


export class ObParty2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountRole" })
  accountRole?: string;

  @Metadata({ data: "json, name=Address", elemType: shared.ObParty2Address })
  address?: ObParty2Address[];

  @Metadata({ data: "json, name=BeneficialOwnership" })
  beneficialOwnership?: boolean;

  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=FullLegalName" })
  fullLegalName?: string;

  @Metadata({ data: "json, name=LegalStructure" })
  legalStructure?: string;

  @Metadata({ data: "json, name=Mobile" })
  mobile?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PartyId" })
  partyId: string;

  @Metadata({ data: "json, name=PartyNumber" })
  partyNumber?: string;

  @Metadata({ data: "json, name=PartyType" })
  partyType?: ObExternalPartyType1CodeEnum;

  @Metadata({ data: "json, name=Phone" })
  phone?: string;

  @Metadata({ data: "json, name=Relationships" })
  relationships?: ObPartyRelationships1;
}
