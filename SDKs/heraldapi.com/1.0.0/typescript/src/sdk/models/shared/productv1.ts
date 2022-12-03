import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProductV1ProductLineEnum {
    GeneralLiability = "general_liability",
    WorkersCompensation = "workers_compensation",
    BusinessOwnersPolicy = "business_owners_policy"
}


// ProductV1
/** 
 * A [product](https://www.heraldapi.com/docs/products) refers to a specific type of insurance policy provided by an institution. 
**/
export class ProductV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=institution_id" })
  institutionId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=product_line" })
  productLine: ProductV1ProductLineEnum;
}
