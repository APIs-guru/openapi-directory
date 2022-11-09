import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1Location } from "./googlecloudmlv1location";


export class GoogleCloudMlV1ListLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=locations", elemType: shared.GoogleCloudMlV1Location })
  locations?: GoogleCloudMlV1Location[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
