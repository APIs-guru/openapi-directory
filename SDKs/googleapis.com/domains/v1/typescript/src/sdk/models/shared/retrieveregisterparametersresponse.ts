import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegisterParameters } from "./registerparameters";



// RetrieveRegisterParametersResponse
/** 
 * Response for the `RetrieveRegisterParameters` method.
**/
export class RetrieveRegisterParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registerParameters" })
  registerParameters?: RegisterParameters;
}
