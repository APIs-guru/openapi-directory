import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgencyDetails } from "./agencydetails";
import { SplitCommissionDetails } from "./splitcommissiondetails";
import { GeneralAgencyDetails } from "./generalagencydetails";



// AgentResultAgentDetails
/** 
 * Details about the agent
**/
export class AgentResultAgentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=license_number" })
  licenseNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=national_producer_number" })
  nationalProducerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_id_number" })
  taxIdNumber?: string;
}


export class AgentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agency_details" })
  agencyDetails: AgencyDetails;

  @SpeakeasyMetadata({ data: "json, name=agent_details" })
  agentDetails: AgentResultAgentDetails;

  @SpeakeasyMetadata({ data: "json, name=commission_details", elemType: SplitCommissionDetails })
  commissionDetails: SplitCommissionDetails[];

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=general_agency_details" })
  generalAgencyDetails: GeneralAgencyDetails;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=license_number" })
  licenseNumber: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: number;

  @SpeakeasyMetadata({ data: "json, name=signature_date" })
  signatureDate: Date;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
