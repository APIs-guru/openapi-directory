import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Study } from "./googlecloudmlv1study";



export class GoogleCloudMlV1ListStudiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=studies", elemType: GoogleCloudMlV1Study })
  studies?: GoogleCloudMlV1Study[];
}
