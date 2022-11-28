import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmUserStorageIdNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUserStorageIdNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmUserStorageIdNamePathParams;
}


export class GetRealmUserStorageIdNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmUserStorageIdName2XxApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
