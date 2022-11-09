import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransferParameters } from "./transferparameters";


// RetrieveTransferParametersResponse
/** 
 * Response for the `RetrieveTransferParameters` method.
**/
export class RetrieveTransferParametersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=transferParameters" })
  transferParameters?: TransferParameters;
}
