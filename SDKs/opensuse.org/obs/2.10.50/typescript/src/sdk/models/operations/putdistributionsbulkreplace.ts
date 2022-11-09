import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDistributionsBulkReplaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutDistributionsBulkReplaceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  request?: Uint8Array;

  @Metadata()
  security: PutDistributionsBulkReplaceSecurity;
}


export class PutDistributionsBulkReplaceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
