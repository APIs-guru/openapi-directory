import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPluginsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPluginsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPluginsIdPathParams;
}


export class GetPluginsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPluginsId200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
