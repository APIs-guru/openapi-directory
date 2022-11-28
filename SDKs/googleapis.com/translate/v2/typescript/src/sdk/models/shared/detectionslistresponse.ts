import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectionsResource } from "./detectionsresource";



export class DetectionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detections", elemType: DetectionsResource, elemDepth: 2 })
  detections?: DetectionsResource[][];
}
