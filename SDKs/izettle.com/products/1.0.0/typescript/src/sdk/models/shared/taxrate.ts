import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}
