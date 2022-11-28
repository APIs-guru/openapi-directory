import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



export class ListAvailableLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations?: Location[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
