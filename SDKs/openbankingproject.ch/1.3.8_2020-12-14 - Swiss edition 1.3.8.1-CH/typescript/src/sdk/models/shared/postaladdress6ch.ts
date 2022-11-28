import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostalAddress6Ch
/** 
 * as in ISO pain.001.001.03.ch.02 PostalAddress6
 * If possible structured. Simultaneous use of the structured elements <StrtNm>/ <BldgNb>/<PstCd>/<TwnNm> and the unstructured element <AdrLine> is not permitted.
 * as in ISO pain.001.001.03.ch.02 PostalAddress6-CH
 * 
**/
export class PostalAddress6Ch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=buildingNumber" })
  buildingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=postCode" })
  postCode?: string;

  @SpeakeasyMetadata({ data: "json, name=streetName" })
  streetName?: string;

  @SpeakeasyMetadata({ data: "json, name=townName" })
  townName?: string;
}
