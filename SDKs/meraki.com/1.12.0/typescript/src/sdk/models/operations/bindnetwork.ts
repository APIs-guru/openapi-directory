import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BindNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class BindNetworkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoBind" })
  autoBind?: boolean;

  @Metadata({ data: "json, name=configTemplateId" })
  configTemplateId: string;
}


export class BindNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BindNetworkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: BindNetworkRequestBody;
}


export class BindNetworkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bindNetwork200ApplicationJsonObject?: Map<string, any>;
}
