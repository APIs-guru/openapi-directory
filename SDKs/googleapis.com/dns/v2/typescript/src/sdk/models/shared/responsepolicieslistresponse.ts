import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponseHeader } from "./responseheader";
import { ResponsePolicy } from "./responsepolicy";


export class ResponsePoliciesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=responsePolicies", elemType: shared.ResponsePolicy })
  responsePolicies?: ResponsePolicy[];
}
