import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScreenshotCluster } from "./screenshotcluster";


export class ListScreenshotClustersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusters", elemType: shared.ScreenshotCluster })
  clusters?: ScreenshotCluster[];
}
