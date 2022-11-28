import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpamAggregatesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamAggregatesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamAggregatesDeletePathParams;
}


export class IpamAggregatesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
