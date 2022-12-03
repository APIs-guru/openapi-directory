import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApplications200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application?: shared.ApplicationReadV1;
}


export class PostApplicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ApplicationWriteV1;
}


export class PostApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postApplications200ApplicationJsonObject?: PostApplications200ApplicationJson;
}
