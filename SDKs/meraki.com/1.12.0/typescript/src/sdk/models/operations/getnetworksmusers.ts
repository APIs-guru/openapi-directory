import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSmUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=emails" })
  emails?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=scope" })
  scope?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=usernames" })
  usernames?: string[];
}


export class GetNetworkSmUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSmUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkSmUsersQueryParams;
}


export class GetNetworkSmUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSmUsers200ApplicationJsonObject?: Map<string, any>;
}
