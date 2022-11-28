import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamAggregatesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamAggregatesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamAggregatesUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableAggregateInput;
}


export class IpamAggregatesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aggregate?: shared.Aggregate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
