import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaxRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=default" })
  default?: boolean;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;
}
