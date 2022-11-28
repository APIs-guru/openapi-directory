import { SpeakeasyBase } from "../../../internal/utils";
import { X509Extension } from "./x509extension";
import { CaOptions } from "./caoptions";
import { KeyUsage } from "./keyusage";
import { ObjectId } from "./objectid";
/**
 * An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
**/
export declare class X509Parameters extends SpeakeasyBase {
    additionalExtensions?: X509Extension[];
    aiaOcspServers?: string[];
    caOptions?: CaOptions;
    keyUsage?: KeyUsage;
    policyIds?: ObjectId[];
}
