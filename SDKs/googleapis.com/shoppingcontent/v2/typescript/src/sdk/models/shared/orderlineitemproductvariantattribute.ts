import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderLineItemProductVariantAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimension" })
  dimension?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
