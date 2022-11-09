import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPeersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPeersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPeersIdPathParams;
}


export class GetPeersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPeersId200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
