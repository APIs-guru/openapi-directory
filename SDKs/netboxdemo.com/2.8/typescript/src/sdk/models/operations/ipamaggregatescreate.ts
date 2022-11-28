import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamAggregatesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableAggregateInput;
}


export class IpamAggregatesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aggregate?: shared.Aggregate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
