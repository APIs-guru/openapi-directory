import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrismaCpeCode
/** 
 * Google Payments Center supports searching and filtering on the component fields of this code.
**/
export class PrismaCpeCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prismaClientCode" })
  prismaClientCode?: string;

  @SpeakeasyMetadata({ data: "json, name=prismaEstimateCode" })
  prismaEstimateCode?: string;

  @SpeakeasyMetadata({ data: "json, name=prismaProductCode" })
  prismaProductCode?: string;
}
