import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GetCallResponse } from "./getcallresponse";


// GetCallsResponseEmbedded
/** 
 * A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects
**/
export class GetCallsResponseEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=calls", elemType: shared.GetCallResponse })
  calls?: GetCallResponse[];
}


export class GetCallsResponseLinksSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class GetCallsResponseLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: GetCallsResponseLinksSelf;
}


export class GetCallsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: GetCallsResponseEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: GetCallsResponseLinks;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=record_index" })
  recordIndex?: number;
}
