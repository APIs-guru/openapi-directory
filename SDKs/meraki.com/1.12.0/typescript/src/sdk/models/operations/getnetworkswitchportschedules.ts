import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchPortSchedulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchPortSchedulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchPortSchedulesPathParams;
}


export class GetNetworkSwitchPortSchedulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchPortSchedules200ApplicationJsonObject?: Map<string, any>;
}
