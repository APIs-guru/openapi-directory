import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForecastOptimalParametersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alpha" })
  alpha?: number;

  @Metadata({ data: "json, name=beta" })
  beta?: number;

  @Metadata({ data: "json, name=gamma" })
  gamma?: number;
}
