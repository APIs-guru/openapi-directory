import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UniversalTwoFactor
/** 
 * Security key information specific to the U2F protocol.
**/
export class UniversalTwoFactor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;
}
