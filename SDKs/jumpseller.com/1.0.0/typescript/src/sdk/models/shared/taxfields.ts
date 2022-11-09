import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaxFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=category_id" })
  categoryId?: number;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=fixed" })
  fixed?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=shipping" })
  shipping?: boolean;

  @Metadata({ data: "json, name=tax_amount" })
  taxAmount?: number;
}
