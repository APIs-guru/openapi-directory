import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";



export class ListDestinationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination", elemType: Destination })
  destination?: Destination[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
