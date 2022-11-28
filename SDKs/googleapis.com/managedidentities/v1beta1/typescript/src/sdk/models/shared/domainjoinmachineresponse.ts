import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainJoinMachineResponse
/** 
 * DomainJoinMachineResponse is the response message for DomainJoinMachine method
**/
export class DomainJoinMachineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainJoinBlob" })
  domainJoinBlob?: string;
}
