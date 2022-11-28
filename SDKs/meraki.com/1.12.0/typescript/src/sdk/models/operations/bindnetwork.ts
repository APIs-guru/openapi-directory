import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BindNetworkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class BindNetworkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoBind" })
  autoBind?: boolean;

  @SpeakeasyMetadata({ data: "json, name=configTemplateId" })
  configTemplateId: string;
}


export class BindNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BindNetworkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BindNetworkRequestBody;
}


export class BindNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bindNetwork200ApplicationJsonObject?: Map<string, any>;
}
