import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloseLiveStreamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId: string;
}


export class CloseLiveStreamSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CloseLiveStreamRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CloseLiveStreamQueryParams;

  @Metadata()
  security: CloseLiveStreamSecurity;
}


export class CloseLiveStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
