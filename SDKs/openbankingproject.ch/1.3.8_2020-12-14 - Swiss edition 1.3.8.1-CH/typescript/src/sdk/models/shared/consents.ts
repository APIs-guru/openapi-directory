import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountAccess } from "./accountaccess";


// Consents
/** 
 * Content of the body of a consent request.
 * 
**/
export class Consents extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: AccountAccess;

  @Metadata({ data: "json, name=combinedServiceIndicator" })
  combinedServiceIndicator: boolean;

  @Metadata({ data: "json, name=frequencyPerDay" })
  frequencyPerDay: number;

  @Metadata({ data: "json, name=recurringIndicator" })
  recurringIndicator: boolean;

  @Metadata({ data: "json, name=validUntil" })
  validUntil: Date;
}
