import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Screen } from "./screen";
import { Screen } from "./screen";


export class ScreenshotCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity" })
  activity?: string;

  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=keyScreen" })
  keyScreen?: Screen;

  @Metadata({ data: "json, name=screens", elemType: shared.Screen })
  screens?: Screen[];
}
