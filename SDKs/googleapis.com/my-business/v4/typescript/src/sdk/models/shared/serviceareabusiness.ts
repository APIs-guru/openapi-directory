import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Places } from "./places";
import { PointRadius } from "./pointradius";


export enum ServiceAreaBusinessBusinessTypeEnum {
    BusinessTypeUnspecified = "BUSINESS_TYPE_UNSPECIFIED",
    CustomerLocationOnly = "CUSTOMER_LOCATION_ONLY",
    CustomerAndBusinessLocation = "CUSTOMER_AND_BUSINESS_LOCATION"
}


// ServiceAreaBusiness
/** 
 * Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).
**/
export class ServiceAreaBusiness extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessType" })
  businessType?: ServiceAreaBusinessBusinessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=places" })
  places?: Places;

  @SpeakeasyMetadata({ data: "json, name=radius" })
  radius?: PointRadius;
}
