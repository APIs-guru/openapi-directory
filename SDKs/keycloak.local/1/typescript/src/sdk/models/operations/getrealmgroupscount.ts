import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmGroupsCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupsCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top" })
  top?: boolean;
}


export class GetRealmGroupsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmGroupsCountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmGroupsCountQueryParams;
}


export class GetRealmGroupsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmGroupsCount2XxApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
