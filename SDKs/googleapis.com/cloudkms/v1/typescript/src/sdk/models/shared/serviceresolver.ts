import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Certificate } from "./certificate";


// ServiceResolver
/** 
 * A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
**/
export class ServiceResolver extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpointFilter" })
  endpointFilter?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=serverCertificates", elemType: shared.Certificate })
  serverCertificates?: Certificate[];

  @Metadata({ data: "json, name=serviceDirectoryService" })
  serviceDirectoryService?: string;
}
