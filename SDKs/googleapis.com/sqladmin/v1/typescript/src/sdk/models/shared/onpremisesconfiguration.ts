import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceReference } from "./instancereference";


// OnPremisesConfiguration
/** 
 * On-premises instance configuration.
**/
export class OnPremisesConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @Metadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @Metadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @Metadata({ data: "json, name=dumpFilePath" })
  dumpFilePath?: string;

  @Metadata({ data: "json, name=hostPort" })
  hostPort?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=sourceInstance" })
  sourceInstance?: InstanceReference;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
