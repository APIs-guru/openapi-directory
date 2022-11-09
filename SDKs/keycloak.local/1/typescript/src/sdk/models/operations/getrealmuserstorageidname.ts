import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmUserStorageIdNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUserStorageIdNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmUserStorageIdNamePathParams;
}


export class GetRealmUserStorageIdNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmUserStorageIdName2XxApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
