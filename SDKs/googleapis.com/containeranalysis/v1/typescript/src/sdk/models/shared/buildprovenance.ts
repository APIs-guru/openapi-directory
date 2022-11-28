import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
import { Command } from "./command";
import { Source } from "./source";



// BuildProvenance
/** 
 * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
**/
export class BuildProvenance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildOptions" })
  buildOptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=builderVersion" })
  builderVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=builtArtifacts", elemType: Artifact })
  builtArtifacts?: Artifact[];

  @SpeakeasyMetadata({ data: "json, name=commands", elemType: Command })
  commands?: Command[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=logsUri" })
  logsUri?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceProvenance" })
  sourceProvenance?: Source;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
