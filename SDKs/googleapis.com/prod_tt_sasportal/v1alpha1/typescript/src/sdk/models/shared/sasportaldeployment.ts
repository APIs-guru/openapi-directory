import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalDeployment
/** 
 * The Deployment.
**/
export class SasPortalDeployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=frns" })
  frns?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sasUserIds" })
  sasUserIds?: string[];
}


// SasPortalDeploymentInput
/** 
 * The Deployment.
**/
export class SasPortalDeploymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=sasUserIds" })
  sasUserIds?: string[];
}
