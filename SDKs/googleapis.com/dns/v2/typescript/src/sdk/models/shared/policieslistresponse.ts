import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponseHeader } from "./responseheader";
import { Policy } from "./policy";


export class PoliciesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.Policy })
  policies?: Policy[];
}
