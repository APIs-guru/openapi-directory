import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Creative } from "./creative";



export class ListCreativesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatives", elemType: Creative })
  creatives?: Creative[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
