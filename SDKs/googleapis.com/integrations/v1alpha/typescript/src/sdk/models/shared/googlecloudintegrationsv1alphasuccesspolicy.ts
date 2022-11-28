import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum {
    FinalStateUnspecified = "FINAL_STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Suspended = "SUSPENDED"
}


// GoogleCloudIntegrationsV1alphaSuccessPolicy
/** 
 * Policy that dictates the behavior for the task after it completes successfully.
**/
export class GoogleCloudIntegrationsV1alphaSuccessPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finalState" })
  finalState?: GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum;
}
