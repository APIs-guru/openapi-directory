import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEnrichmentDataUsingPost1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EnrichmentRequest;
}


export class GetEnrichmentDataUsingPost1Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
