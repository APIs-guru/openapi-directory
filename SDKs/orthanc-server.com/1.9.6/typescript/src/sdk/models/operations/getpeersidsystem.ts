import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPeersIdSystemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPeersIdSystemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPeersIdSystemPathParams;
}


export class GetPeersIdSystemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPeersIdSystem200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
