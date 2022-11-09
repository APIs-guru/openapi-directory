import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamAggregatesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamAggregatesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamAggregatesReadPathParams;
}


export class IpamAggregatesReadResponse extends SpeakeasyBase {
  @Metadata()
  aggregate?: shared.Aggregate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
