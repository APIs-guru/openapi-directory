import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnmappedIdentity } from "./unmappedidentity";



export class ListUnmappedIdentitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unmappedIdentities", elemType: UnmappedIdentity })
  unmappedIdentities?: UnmappedIdentity[];
}
