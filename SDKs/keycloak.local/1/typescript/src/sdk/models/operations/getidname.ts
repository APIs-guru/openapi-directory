import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIdNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetIdNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIdNamePathParams;
}


export class GetIdNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getIdName2XxApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
