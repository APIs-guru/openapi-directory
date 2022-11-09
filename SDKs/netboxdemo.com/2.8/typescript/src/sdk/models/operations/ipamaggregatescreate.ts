import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamAggregatesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableAggregate;
}


export class IpamAggregatesCreateResponse extends SpeakeasyBase {
  @Metadata()
  aggregate?: shared.Aggregate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
