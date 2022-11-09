import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Artifact } from "./artifact";
import { Command } from "./command";
import { Source } from "./source";


// BuildProvenance
/** 
 * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
**/
export class BuildProvenance extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildOptions" })
  buildOptions?: Map<string, string>;

  @Metadata({ data: "json, name=builderVersion" })
  builderVersion?: string;

  @Metadata({ data: "json, name=builtArtifacts", elemType: shared.Artifact })
  builtArtifacts?: Artifact[];

  @Metadata({ data: "json, name=commands", elemType: shared.Command })
  commands?: Command[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: string;

  @Metadata({ data: "json, name=finishTime" })
  finishTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=logsBucket" })
  logsBucket?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=sourceProvenance" })
  sourceProvenance?: Source;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
