import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FreeFormServiceItem } from "./freeformserviceitem";
import { Money } from "./money";
import { StructuredServiceItem } from "./structuredserviceitem";



// ServiceItem
/** 
 * A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.
**/
export class ServiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=freeFormServiceItem" })
  freeFormServiceItem?: FreeFormServiceItem;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Money;

  @SpeakeasyMetadata({ data: "json, name=structuredServiceItem" })
  structuredServiceItem?: StructuredServiceItem;
}
