import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GroupResultBusinessDetailsEmployerTypeEnum {
    ForeignGovernment = "foreign_government",
    PrivateSector = "private_sector",
    ReligiousEmployer = "religious_employer",
    StateGovernment = "state_government",
    TribalGovernment = "tribal_government"
}

export enum GroupResultBusinessDetailsEntityTypeEnum {
    CCorp = "c_corp",
    Llc = "llc",
    Llp = "llp",
    Partnership = "partnership",
    SCorp = "s_corp"
}


// GroupResultBusinessDetails
/** 
 * Details about business or industry of the group
**/
export class GroupResultBusinessDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=company_description" })
  companyDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=date_established" })
  dateEstablished?: string;

  @SpeakeasyMetadata({ data: "json, name=employer_type" })
  employerType?: GroupResultBusinessDetailsEmployerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: GroupResultBusinessDetailsEntityTypeEnum;
}


// GroupResultInsuranceDetails
/** 
 * General details about the group insurance offerings
**/
export class GroupResultInsuranceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_erisa_compliant" })
  isErisaCompliant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_erisa_subject" })
  isErisaSubject?: boolean;
}


export class GroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=business_details" })
  businessDetails?: GroupResultBusinessDetails;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=dba_name" })
  dbaName?: string;

  @SpeakeasyMetadata({ data: "json, name=federal_ein" })
  federalEin?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=insurance_details" })
  insuranceDetails?: GroupResultInsuranceDetails;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=sic_code" })
  sicCode?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
