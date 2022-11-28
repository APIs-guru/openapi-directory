import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkTrafficAnalysisPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum {
    Host = "host",
    Port = "port",
    IpRange = "ipRange"
}


export class UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}

export enum UpdateNetworkTrafficAnalysisRequestBodyModeEnum {
    Disabled = "disabled",
    Basic = "basic",
    Detailed = "detailed"
}


export class UpdateNetworkTrafficAnalysisRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customPieChartItems", elemType: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems })
  customPieChartItems?: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems[];

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: UpdateNetworkTrafficAnalysisRequestBodyModeEnum;
}


export class UpdateNetworkTrafficAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkTrafficAnalysisPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkTrafficAnalysisRequestBody;
}


export class UpdateNetworkTrafficAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkTrafficAnalysis200ApplicationJsonObject?: Map<string, any>;
}
