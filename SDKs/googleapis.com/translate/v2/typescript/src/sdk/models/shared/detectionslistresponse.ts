import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetectionsResource } from "./detectionsresource";


export class DetectionsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=detections", elemType: shared.DetectionsResource, elemDepth: 2 })
  detections?: DetectionsResource[][];
}
