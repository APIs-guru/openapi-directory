import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UniversalTwoFactor
/** 
 * Security key information specific to the U2F protocol.
**/
export class UniversalTwoFactor extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;
}
