import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Location } from "./googlecloudmlv1location";



export class GoogleCloudMlV1ListLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: GoogleCloudMlV1Location })
  locations?: GoogleCloudMlV1Location[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
