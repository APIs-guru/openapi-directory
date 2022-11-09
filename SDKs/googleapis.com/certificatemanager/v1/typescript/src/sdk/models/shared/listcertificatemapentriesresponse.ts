import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateMapEntry } from "./certificatemapentry";


// ListCertificateMapEntriesResponse
/** 
 * Response for the `ListCertificateMapEntries` method.
**/
export class ListCertificateMapEntriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateMapEntries", elemType: shared.CertificateMapEntry })
  certificateMapEntries?: CertificateMapEntry[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
