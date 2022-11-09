import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MirrorConfig } from "./mirrorconfig";
import { PubsubConfig } from "./pubsubconfig";


// Repo
/** 
 * A repository (or repo) is a Git repository storing versioned source content.
**/
export class Repo extends SpeakeasyBase {
  @Metadata({ data: "json, name=mirrorConfig" })
  mirrorConfig?: MirrorConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pubsubConfigs", elemType: shared.PubsubConfig })
  pubsubConfigs?: Map<string, PubsubConfig>;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
