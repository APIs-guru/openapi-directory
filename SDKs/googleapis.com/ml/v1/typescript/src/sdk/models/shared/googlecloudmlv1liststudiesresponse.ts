import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1Study } from "./googlecloudmlv1study";


export class GoogleCloudMlV1ListStudiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=studies", elemType: shared.GoogleCloudMlV1Study })
  studies?: GoogleCloudMlV1Study[];
}
