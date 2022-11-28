import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetCallResponse } from "./getcallresponse";



// GetCallsResponseEmbedded
/** 
 * A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects
**/
export class GetCallsResponseEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calls", elemType: GetCallResponse })
  calls?: GetCallResponse[];
}


export class GetCallsResponseLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetCallsResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetCallsResponseLinksSelf;
}


export class GetCallsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: GetCallsResponseEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetCallsResponseLinks;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=record_index" })
  recordIndex?: number;
}
