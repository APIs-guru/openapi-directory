import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UnmappedIdentity } from "./unmappedidentity";


export class ListUnmappedIdentitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unmappedIdentities", elemType: shared.UnmappedIdentity })
  unmappedIdentities?: UnmappedIdentity[];
}
