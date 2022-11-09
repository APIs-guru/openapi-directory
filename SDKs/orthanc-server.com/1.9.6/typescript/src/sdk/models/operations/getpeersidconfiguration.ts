import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPeersIdConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPeersIdConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPeersIdConfigurationPathParams;
}


export class GetPeersIdConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPeersIdConfiguration200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
