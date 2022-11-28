import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamAggregatesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamAggregatesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamAggregatesReadPathParams;
}


export class IpamAggregatesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aggregate?: shared.Aggregate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
