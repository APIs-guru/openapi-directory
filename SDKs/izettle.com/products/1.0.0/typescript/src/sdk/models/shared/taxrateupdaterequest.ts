import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxRateUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;
}
