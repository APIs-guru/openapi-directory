import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRiskParameters200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=risk_parameters", elemType: shared.RiskParameterV1 })
  riskParameters?: shared.RiskParameterV1[];
}


export class GetRiskParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRiskParameters200ApplicationJsonObject?: GetRiskParameters200ApplicationJson;
}
