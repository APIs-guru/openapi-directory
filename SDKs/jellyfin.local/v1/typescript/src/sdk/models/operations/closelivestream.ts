import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloseLiveStreamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId: string;
}


export class CloseLiveStreamSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CloseLiveStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CloseLiveStreamQueryParams;

  @SpeakeasyMetadata()
  security: CloseLiveStreamSecurity;
}


export class CloseLiveStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
