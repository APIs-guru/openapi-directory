import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GroupCreateRequestBusinessDetailsEmployerTypeEnum {
    ForeignGovernment = "foreign_government",
    PrivateSector = "private_sector",
    ReligiousEmployer = "religious_employer",
    StateGovernment = "state_government",
    TribalGovernment = "tribal_government"
}

export enum GroupCreateRequestBusinessDetailsEntityTypeEnum {
    CCorp = "c_corp",
    Llc = "llc",
    Llp = "llp",
    Partnership = "partnership",
    SCorp = "s_corp"
}


// GroupCreateRequestBusinessDetails
/** 
 * Details about business or industry of the group
**/
export class GroupCreateRequestBusinessDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=company_description" })
  companyDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=date_established" })
  dateEstablished?: Date;

  @SpeakeasyMetadata({ data: "json, name=employer_type" })
  employerType?: GroupCreateRequestBusinessDetailsEmployerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: GroupCreateRequestBusinessDetailsEntityTypeEnum;
}


// GroupCreateRequestInsuranceDetails
/** 
 * General details about the group insurance offerings
**/
export class GroupCreateRequestInsuranceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_erisa_compliant" })
  isErisaCompliant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_erisa_subject" })
  isErisaSubject?: boolean;
}


export class GroupCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=business_details" })
  businessDetails?: GroupCreateRequestBusinessDetails;

  @SpeakeasyMetadata({ data: "json, name=dba_name" })
  dbaName?: string;

  @SpeakeasyMetadata({ data: "json, name=federal_ein" })
  federalEin?: string;

  @SpeakeasyMetadata({ data: "json, name=insurance_details" })
  insuranceDetails?: GroupCreateRequestInsuranceDetails;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=sic_code" })
  sicCode?: string;
}
