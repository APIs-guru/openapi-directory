import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MirrorConfig } from "./mirrorconfig";
import { PubsubConfig } from "./pubsubconfig";



// Repo
/** 
 * A repository (or repo) is a Git repository storing versioned source content.
**/
export class Repo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mirrorConfig" })
  mirrorConfig?: MirrorConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubConfigs", elemType: PubsubConfig })
  pubsubConfigs?: Map<string, PubsubConfig>;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
