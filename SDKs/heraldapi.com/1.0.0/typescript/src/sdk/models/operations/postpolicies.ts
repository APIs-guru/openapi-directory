import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPoliciesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quote_id" })
  quoteId?: string;
}


export class PostPolicies200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: shared.Policy;
}


export class PostPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostPoliciesRequestBody;
}


export class PostPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postPolicies200ApplicationJsonObject?: PostPolicies200ApplicationJson;
}
