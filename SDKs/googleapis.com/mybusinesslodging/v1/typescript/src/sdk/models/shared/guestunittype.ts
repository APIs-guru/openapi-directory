import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GuestUnitFeatures } from "./guestunitfeatures";


// GuestUnitType
/** 
 * A specific type of unit primarily defined by its features.
**/
export class GuestUnitType extends SpeakeasyBase {
  @Metadata({ data: "json, name=codes" })
  codes?: string[];

  @Metadata({ data: "json, name=features" })
  features?: GuestUnitFeatures;

  @Metadata({ data: "json, name=label" })
  label?: string;
}
