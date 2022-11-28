import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceReference } from "./instancereference";



// OnPremisesConfiguration
/** 
 * On-premises instance configuration.
**/
export class OnPremisesConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @SpeakeasyMetadata({ data: "json, name=dumpFilePath" })
  dumpFilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=hostPort" })
  hostPort?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceInstance" })
  sourceInstance?: InstanceReference;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
