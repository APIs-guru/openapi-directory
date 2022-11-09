import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpBody } from "./httpbody";
import { Notice } from "./notice";


// RdapResponse
/** 
 * Response to a general RDAP query.
**/
export class RdapResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string[];

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: number;

  @Metadata({ data: "json, name=jsonResponse" })
  jsonResponse?: HttpBody;

  @Metadata({ data: "json, name=lang" })
  lang?: string;

  @Metadata({ data: "json, name=notices", elemType: shared.Notice })
  notices?: Notice[];

  @Metadata({ data: "json, name=rdapConformance" })
  rdapConformance?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
