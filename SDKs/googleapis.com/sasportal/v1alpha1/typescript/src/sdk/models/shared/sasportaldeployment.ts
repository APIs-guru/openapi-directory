import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalDeployment
/** 
 * The Deployment.
**/
export class SasPortalDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=frns" })
  frns?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sasUserIds" })
  sasUserIds?: string[];
}
