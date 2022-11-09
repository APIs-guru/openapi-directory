import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegisterParameters } from "./registerparameters";


// RetrieveRegisterParametersResponse
/** 
 * Response for the `RetrieveRegisterParameters` method.
**/
export class RetrieveRegisterParametersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=registerParameters" })
  registerParameters?: RegisterParameters;
}
