import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Certificate } from "./certificate";


// ListCertificatesResponse
/** 
 * Response for the `ListCertificates` method.
**/
export class ListCertificatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates", elemType: shared.Certificate })
  certificates?: Certificate[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
