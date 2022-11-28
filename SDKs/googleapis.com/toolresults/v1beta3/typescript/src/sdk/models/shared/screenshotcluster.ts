import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Screen } from "./screen";



export class ScreenshotCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity" })
  activity?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=keyScreen" })
  keyScreen?: Screen;

  @SpeakeasyMetadata({ data: "json, name=screens", elemType: Screen })
  screens?: Screen[];
}
