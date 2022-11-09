import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostalAddress6Ch
/** 
 * as in ISO pain.001.001.03.ch.02 PostalAddress6
 * If possible structured. Simultaneous use of the structured elements <StrtNm>/ <BldgNb>/<PstCd>/<TwnNm> and the unstructured element <AdrLine> is not permitted.
 * as in ISO pain.001.001.03.ch.02 PostalAddress6-CH
 * 
**/
export class PostalAddress6Ch extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=buildingNumber" })
  buildingNumber?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=postCode" })
  postCode?: string;

  @Metadata({ data: "json, name=streetName" })
  streetName?: string;

  @Metadata({ data: "json, name=townName" })
  townName?: string;
}
