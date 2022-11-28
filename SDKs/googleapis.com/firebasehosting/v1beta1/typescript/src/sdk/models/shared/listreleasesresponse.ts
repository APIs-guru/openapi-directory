import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Release } from "./release";



export class ListReleasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=releases", elemType: Release })
  releases?: Release[];
}
