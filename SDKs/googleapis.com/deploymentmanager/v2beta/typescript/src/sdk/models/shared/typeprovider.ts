import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CollectionOverride } from "./collectionoverride";
import { Credential } from "./credential";
import { TypeProviderLabelEntry } from "./typeproviderlabelentry";
import { Operation } from "./operation";
import { Options } from "./options";


// TypeProvider
/** 
 * A type provider that describes a service-backed Type.
**/
export class TypeProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionOverrides", elemType: shared.CollectionOverride })
  collectionOverrides?: CollectionOverride[];

  @Metadata({ data: "json, name=credential" })
  credential?: Credential;

  @Metadata({ data: "json, name=customCertificateAuthorityRoots" })
  customCertificateAuthorityRoots?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=descriptorUrl" })
  descriptorUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.TypeProviderLabelEntry })
  labels?: TypeProviderLabelEntry[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: Operation;

  @Metadata({ data: "json, name=options" })
  options?: Options;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
