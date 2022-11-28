import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=fixed" })
  fixed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping" })
  shipping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tax_amount" })
  taxAmount?: number;
}
