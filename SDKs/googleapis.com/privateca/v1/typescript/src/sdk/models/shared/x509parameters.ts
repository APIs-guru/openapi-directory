import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { X509Extension } from "./x509extension";
import { CaOptions } from "./caoptions";
import { KeyUsage } from "./keyusage";
import { ObjectId } from "./objectid";


// X509Parameters
/** 
 * An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
**/
export class X509Parameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalExtensions", elemType: shared.X509Extension })
  additionalExtensions?: X509Extension[];

  @Metadata({ data: "json, name=aiaOcspServers" })
  aiaOcspServers?: string[];

  @Metadata({ data: "json, name=caOptions" })
  caOptions?: CaOptions;

  @Metadata({ data: "json, name=keyUsage" })
  keyUsage?: KeyUsage;

  @Metadata({ data: "json, name=policyIds", elemType: shared.ObjectId })
  policyIds?: ObjectId[];
}
