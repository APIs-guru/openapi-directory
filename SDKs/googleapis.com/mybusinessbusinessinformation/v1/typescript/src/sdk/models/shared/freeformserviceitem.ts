import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";



// FreeFormServiceItem
/** 
 * Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.
**/
export class FreeFormServiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: Label;
}
