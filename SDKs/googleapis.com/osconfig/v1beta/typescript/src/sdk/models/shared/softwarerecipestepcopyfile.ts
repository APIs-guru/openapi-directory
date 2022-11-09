import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareRecipeStepCopyFile
/** 
 * Copies the artifact to the specified path on the instance.
**/
export class SoftwareRecipeStepCopyFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactId" })
  artifactId?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=overwrite" })
  overwrite?: boolean;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string;
}
