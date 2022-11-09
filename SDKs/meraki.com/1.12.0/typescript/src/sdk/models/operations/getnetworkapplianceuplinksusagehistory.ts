import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceUplinksUsageHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceUplinksUsageHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkApplianceUplinksUsageHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceUplinksUsageHistoryPathParams;

  @Metadata()
  queryParams: GetNetworkApplianceUplinksUsageHistoryQueryParams;
}


export class GetNetworkApplianceUplinksUsageHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceUplinksUsageHistory200ApplicationJsonObject?: Map<string, any>;
}
