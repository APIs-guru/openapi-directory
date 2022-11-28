import { SpeakeasyBase } from "../../../internal/utils";
import { ObAddressTypeCodeEnum } from "./obaddresstypecodeenum";
import { ObExternalPartyType1CodeEnum } from "./obexternalpartytype1codeenum";
import { ObPartyRelationships1 } from "./obpartyrelationships1";
/**
 * Postal address of a party.
**/
export declare class ObParty2Address extends SpeakeasyBase {
    addressLine?: string[];
    addressType?: ObAddressTypeCodeEnum;
    buildingNumber?: string;
    country: string;
    countrySubDivision?: string;
    postCode?: string;
    streetName?: string;
    townName?: string;
}
export declare class ObParty2 extends SpeakeasyBase {
    accountRole?: string;
    address?: ObParty2Address[];
    beneficialOwnership?: boolean;
    emailAddress?: string;
    fullLegalName?: string;
    legalStructure?: string;
    mobile?: string;
    name?: string;
    partyId: string;
    partyNumber?: string;
    partyType?: ObExternalPartyType1CodeEnum;
    phone?: string;
    relationships?: ObPartyRelationships1;
}
