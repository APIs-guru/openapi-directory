import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamAggregatesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamAggregatesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamAggregatesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableAggregate;
}


export class IpamAggregatesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  aggregate?: shared.Aggregate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
