import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareRecipeStepCopyFile
/** 
 * Copies the artifact to the specified path on the instance.
**/
export class SoftwareRecipeStepCopyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactId" })
  artifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=overwrite" })
  overwrite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string;
}
