import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=emails" })
  emails?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=scope" })
  scope?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=usernames" })
  usernames?: string[];
}


export class GetNetworkSmUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmUsersPathParams;

  @Metadata()
  queryParams: GetNetworkSmUsersQueryParams;
}


export class GetNetworkSmUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmUsers200ApplicationJsonObject?: Map<string, any>;
}
