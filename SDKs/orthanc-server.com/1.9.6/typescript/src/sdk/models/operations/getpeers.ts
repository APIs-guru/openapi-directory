import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPeersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetPeersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPeersQueryParams;
}


export class GetPeersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPeers200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
