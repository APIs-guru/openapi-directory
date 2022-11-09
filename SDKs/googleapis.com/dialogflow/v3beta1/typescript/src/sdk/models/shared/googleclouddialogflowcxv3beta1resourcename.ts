import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1ResourceName
/** 
 * Resource name and display name.
**/
export class GoogleCloudDialogflowCxV3beta1ResourceName extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
