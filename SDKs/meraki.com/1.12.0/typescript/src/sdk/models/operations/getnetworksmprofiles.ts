import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmProfilesPathParams;
}


export class GetNetworkSmProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmProfiles200ApplicationJsonObject?: Map<string, any>;
}
