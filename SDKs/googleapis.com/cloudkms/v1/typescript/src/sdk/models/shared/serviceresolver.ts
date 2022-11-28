import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
import { CertificateInput } from "./certificate";



// ServiceResolver
/** 
 * A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
**/
export class ServiceResolver extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpointFilter" })
  endpointFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=serverCertificates", elemType: Certificate })
  serverCertificates?: Certificate[];

  @SpeakeasyMetadata({ data: "json, name=serviceDirectoryService" })
  serviceDirectoryService?: string;
}


// ServiceResolverInput
/** 
 * A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
**/
export class ServiceResolverInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpointFilter" })
  endpointFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=serverCertificates", elemType: CertificateInput })
  serverCertificates?: CertificateInput[];

  @SpeakeasyMetadata({ data: "json, name=serviceDirectoryService" })
  serviceDirectoryService?: string;
}
