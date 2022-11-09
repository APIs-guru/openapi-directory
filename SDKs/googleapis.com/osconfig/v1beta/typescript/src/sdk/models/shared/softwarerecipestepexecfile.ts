import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareRecipeStepExecFile
/** 
 * Executes an artifact or local file.
**/
export class SoftwareRecipeStepExecFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedExitCodes" })
  allowedExitCodes?: number[];

  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=artifactId" })
  artifactId?: string;

  @Metadata({ data: "json, name=localPath" })
  localPath?: string;
}
