import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPluginsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPluginsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPluginsIdPathParams;
}


export class GetPluginsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPluginsId200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
