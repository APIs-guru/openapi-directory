import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmGroupsCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupsCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=top" })
  top?: boolean;
}


export class GetRealmGroupsCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmGroupsCountPathParams;

  @Metadata()
  queryParams: GetRealmGroupsCountQueryParams;
}


export class GetRealmGroupsCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmGroupsCount2XxApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
