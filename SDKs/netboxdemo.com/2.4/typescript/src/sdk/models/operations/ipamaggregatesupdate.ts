import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamAggregatesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamAggregatesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamAggregatesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableAggregate;
}


export class IpamAggregatesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  aggregate?: shared.Aggregate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
