import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FreeFormServiceItem } from "./freeformserviceitem";
import { Money } from "./money";
import { StructuredServiceItem } from "./structuredserviceitem";


// ServiceItem
/** 
 * A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.
**/
export class ServiceItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=freeFormServiceItem" })
  freeFormServiceItem?: FreeFormServiceItem;

  @Metadata({ data: "json, name=price" })
  price?: Money;

  @Metadata({ data: "json, name=structuredServiceItem" })
  structuredServiceItem?: StructuredServiceItem;
}
