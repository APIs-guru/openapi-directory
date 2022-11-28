import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceResolverInput } from "./serviceresolver";
import { ServiceResolver } from "./serviceresolver";



// EkmConnectionInput
/** 
 * An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.
**/
export class EkmConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceResolvers", elemType: ServiceResolverInput })
  serviceResolvers?: ServiceResolverInput[];
}


// EkmConnection
/** 
 * An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.
**/
export class EkmConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceResolvers", elemType: ServiceResolver })
  serviceResolvers?: ServiceResolver[];
}
