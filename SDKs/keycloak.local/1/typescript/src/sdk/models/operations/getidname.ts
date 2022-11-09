import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIdNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetIdNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIdNamePathParams;
}


export class GetIdNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getIdName2XxApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
