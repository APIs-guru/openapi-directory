import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PsuData } from "./psudata";



// UpdatePsuAuthentication
/** 
 * Content of the body of a Update PSU authentication request
 * 
 * Password subfield is used.
 * 
**/
export class UpdatePsuAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=psuData" })
  psuData: PsuData;
}
