import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Label } from "./label";


// FreeFormServiceItem
/** 
 * Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.
**/
export class FreeFormServiceItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=label" })
  label?: Label;
}
