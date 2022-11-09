import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpamAggregatesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamAggregatesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamAggregatesDeletePathParams;
}


export class IpamAggregatesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
