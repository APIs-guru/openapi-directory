import { SpeakeasyBase } from "../../../internal/utils";
import { FreeFormServiceItem } from "./freeformserviceitem";
import { Money } from "./money";
import { StructuredServiceItem } from "./structuredserviceitem";
/**
 * A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.
**/
export declare class ServiceItem extends SpeakeasyBase {
    freeFormServiceItem?: FreeFormServiceItem;
    price?: Money;
    structuredServiceItem?: StructuredServiceItem;
}
