import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateMapEntry } from "./certificatemapentry";



// ListCertificateMapEntriesResponse
/** 
 * Response for the `ListCertificateMapEntries` method.
**/
export class ListCertificateMapEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateMapEntries", elemType: CertificateMapEntry })
  certificateMapEntries?: CertificateMapEntry[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
