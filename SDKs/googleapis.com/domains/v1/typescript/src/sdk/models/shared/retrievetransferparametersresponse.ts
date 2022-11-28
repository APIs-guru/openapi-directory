import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransferParameters } from "./transferparameters";



// RetrieveTransferParametersResponse
/** 
 * Response for the `RetrieveTransferParameters` method.
**/
export class RetrieveTransferParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transferParameters" })
  transferParameters?: TransferParameters;
}
