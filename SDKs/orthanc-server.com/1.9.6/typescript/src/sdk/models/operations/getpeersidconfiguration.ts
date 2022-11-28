import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPeersIdConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPeersIdConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPeersIdConfigurationPathParams;
}


export class GetPeersIdConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPeersIdConfiguration200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
