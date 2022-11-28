import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListItemNamesForUnmappedIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemNames" })
  itemNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
