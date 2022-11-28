import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScreenshotCluster } from "./screenshotcluster";



export class ListScreenshotClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusters", elemType: ScreenshotCluster })
  clusters?: ScreenshotCluster[];
}
