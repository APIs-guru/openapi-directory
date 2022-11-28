import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PubsubConfig } from "./pubsubconfig";



// ProjectConfig
/** 
 * Cloud Source Repositories configuration of a project.
**/
export class ProjectConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enablePrivateKeyCheck" })
  enablePrivateKeyCheck?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubConfigs", elemType: PubsubConfig })
  pubsubConfigs?: Map<string, PubsubConfig>;
}
