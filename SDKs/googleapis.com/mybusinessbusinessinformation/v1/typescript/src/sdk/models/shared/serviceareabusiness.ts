import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Places } from "./places";

export enum ServiceAreaBusinessBusinessTypeEnum {
    BusinessTypeUnspecified = "BUSINESS_TYPE_UNSPECIFIED"
,    CustomerLocationOnly = "CUSTOMER_LOCATION_ONLY"
,    CustomerAndBusinessLocation = "CUSTOMER_AND_BUSINESS_LOCATION"
}


// ServiceAreaBusiness
/** 
 * Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).
**/
export class ServiceAreaBusiness extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessType" })
  businessType?: ServiceAreaBusinessBusinessTypeEnum;

  @Metadata({ data: "json, name=places" })
  places?: Places;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
