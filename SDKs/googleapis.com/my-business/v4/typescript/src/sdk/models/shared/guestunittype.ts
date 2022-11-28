import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GuestUnitFeatures } from "./guestunitfeatures";



// GuestUnitType
/** 
 * A specific type of unit primarily defined by its features.
**/
export class GuestUnitType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codes" })
  codes?: string[];

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: GuestUnitFeatures;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
