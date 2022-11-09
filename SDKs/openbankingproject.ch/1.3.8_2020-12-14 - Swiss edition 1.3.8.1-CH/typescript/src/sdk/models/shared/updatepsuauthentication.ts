import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PsuData } from "./psudata";


// UpdatePsuAuthentication
/** 
 * Content of the body of a Update PSU authentication request
 * 
 * Password subfield is used.
 * 
**/
export class UpdatePsuAuthentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=psuData" })
  psuData: PsuData;
}
