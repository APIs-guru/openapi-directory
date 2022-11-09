import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkTrafficAnalysisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum {
    Host = "host"
,    Port = "port"
,    IpRange = "ipRange"
}


export class UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}

export enum UpdateNetworkTrafficAnalysisRequestBodyModeEnum {
    Disabled = "disabled"
,    Basic = "basic"
,    Detailed = "detailed"
}


export class UpdateNetworkTrafficAnalysisRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=customPieChartItems", elemType: operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems })
  customPieChartItems?: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems[];

  @Metadata({ data: "json, name=mode" })
  mode?: UpdateNetworkTrafficAnalysisRequestBodyModeEnum;
}


export class UpdateNetworkTrafficAnalysisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkTrafficAnalysisPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkTrafficAnalysisRequestBody;
}


export class UpdateNetworkTrafficAnalysisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkTrafficAnalysis200ApplicationJsonObject?: Map<string, any>;
}
