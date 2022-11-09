import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrismaCpeCode
/** 
 * Google Payments Center supports searching and filtering on the component fields of this code.
**/
export class PrismaCpeCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=prismaClientCode" })
  prismaClientCode?: string;

  @Metadata({ data: "json, name=prismaEstimateCode" })
  prismaEstimateCode?: string;

  @Metadata({ data: "json, name=prismaProductCode" })
  prismaProductCode?: string;
}
