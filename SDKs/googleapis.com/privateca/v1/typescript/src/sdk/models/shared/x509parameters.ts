import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { X509Extension } from "./x509extension";
import { CaOptions } from "./caoptions";
import { KeyUsage } from "./keyusage";
import { ObjectId } from "./objectid";



// X509Parameters
/** 
 * An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
**/
export class X509Parameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalExtensions", elemType: X509Extension })
  additionalExtensions?: X509Extension[];

  @SpeakeasyMetadata({ data: "json, name=aiaOcspServers" })
  aiaOcspServers?: string[];

  @SpeakeasyMetadata({ data: "json, name=caOptions" })
  caOptions?: CaOptions;

  @SpeakeasyMetadata({ data: "json, name=keyUsage" })
  keyUsage?: KeyUsage;

  @SpeakeasyMetadata({ data: "json, name=policyIds", elemType: ObjectId })
  policyIds?: ObjectId[];
}
