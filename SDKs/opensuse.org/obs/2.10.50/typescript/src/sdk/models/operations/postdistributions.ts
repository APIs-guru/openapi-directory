import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDistributionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostDistributionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  request?: Uint8Array;

  @Metadata()
  security: PostDistributionsSecurity;
}


export class PostDistributionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
