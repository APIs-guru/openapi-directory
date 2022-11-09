import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListItemNamesForUnmappedIdentityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemNames" })
  itemNames?: string[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
