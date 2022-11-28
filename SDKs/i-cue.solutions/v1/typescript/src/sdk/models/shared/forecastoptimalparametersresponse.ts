import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForecastOptimalParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alpha" })
  alpha?: number;

  @SpeakeasyMetadata({ data: "json, name=beta" })
  beta?: number;

  @SpeakeasyMetadata({ data: "json, name=gamma" })
  gamma?: number;
}
