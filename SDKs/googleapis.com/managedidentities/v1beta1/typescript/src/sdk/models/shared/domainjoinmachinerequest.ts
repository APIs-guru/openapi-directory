import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainJoinMachineRequest
/** 
 * DomainJoinMachineRequest is the request message for DomainJoinMachine method
**/
export class DomainJoinMachineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ouName" })
  ouName?: string;

  @SpeakeasyMetadata({ data: "json, name=vmIdToken" })
  vmIdToken?: string;
}
