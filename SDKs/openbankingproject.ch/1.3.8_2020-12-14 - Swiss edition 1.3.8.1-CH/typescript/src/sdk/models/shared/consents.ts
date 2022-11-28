import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAccess } from "./accountaccess";



// Consents
/** 
 * Content of the body of a consent request.
 * 
**/
export class Consents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: AccountAccess;

  @SpeakeasyMetadata({ data: "json, name=combinedServiceIndicator" })
  combinedServiceIndicator: boolean;

  @SpeakeasyMetadata({ data: "json, name=frequencyPerDay" })
  frequencyPerDay: number;

  @SpeakeasyMetadata({ data: "json, name=recurringIndicator" })
  recurringIndicator: boolean;

  @SpeakeasyMetadata({ data: "json, name=validUntil" })
  validUntil: Date;
}
