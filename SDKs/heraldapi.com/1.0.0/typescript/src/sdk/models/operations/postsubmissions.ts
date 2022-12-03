import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSubmissionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application: any;

  @SpeakeasyMetadata({ data: "json, name=producer_id" })
  producerId: string;
}


export class PostSubmissions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=submission" })
  submission?: shared.SubmissionV1;
}


export class PostSubmissions400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorV1 })
  errors?: shared.ErrorV1[];
}


export class PostSubmissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostSubmissionsRequestBody;
}


export class PostSubmissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postSubmissions200ApplicationJsonObject?: PostSubmissions200ApplicationJson;

  @SpeakeasyMetadata()
  postSubmissions400ApplicationJsonObject?: PostSubmissions400ApplicationJson;
}
