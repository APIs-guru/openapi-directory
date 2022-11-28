import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpBody } from "./httpbody";
import { Notice } from "./notice";



// RdapResponse
/** 
 * Response to a general RDAP query.
**/
export class RdapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string[];

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=jsonResponse" })
  jsonResponse?: HttpBody;

  @SpeakeasyMetadata({ data: "json, name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "json, name=notices", elemType: Notice })
  notices?: Notice[];

  @SpeakeasyMetadata({ data: "json, name=rdapConformance" })
  rdapConformance?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
