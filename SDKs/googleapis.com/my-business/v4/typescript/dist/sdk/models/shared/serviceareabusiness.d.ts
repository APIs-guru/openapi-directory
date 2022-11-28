import { SpeakeasyBase } from "../../../internal/utils";
import { Places } from "./places";
import { PointRadius } from "./pointradius";
export declare enum ServiceAreaBusinessBusinessTypeEnum {
    BusinessTypeUnspecified = "BUSINESS_TYPE_UNSPECIFIED",
    CustomerLocationOnly = "CUSTOMER_LOCATION_ONLY",
    CustomerAndBusinessLocation = "CUSTOMER_AND_BUSINESS_LOCATION"
}
/**
 * Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).
**/
export declare class ServiceAreaBusiness extends SpeakeasyBase {
    businessType?: ServiceAreaBusinessBusinessTypeEnum;
    places?: Places;
    radius?: PointRadius;
}
