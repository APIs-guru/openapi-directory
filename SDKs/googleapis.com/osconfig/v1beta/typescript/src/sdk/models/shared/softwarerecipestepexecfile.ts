import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareRecipeStepExecFile
/** 
 * Executes an artifact or local file.
**/
export class SoftwareRecipeStepExecFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedExitCodes" })
  allowedExitCodes?: number[];

  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=artifactId" })
  artifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=localPath" })
  localPath?: string;
}
