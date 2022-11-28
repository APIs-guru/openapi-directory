import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderLineItemProductVariantAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
