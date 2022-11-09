import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PubsubConfig } from "./pubsubconfig";


// ProjectConfig
/** 
 * Cloud Source Repositories configuration of a project.
**/
export class ProjectConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enablePrivateKeyCheck" })
  enablePrivateKeyCheck?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pubsubConfigs", elemType: shared.PubsubConfig })
  pubsubConfigs?: Map<string, PubsubConfig>;
}
