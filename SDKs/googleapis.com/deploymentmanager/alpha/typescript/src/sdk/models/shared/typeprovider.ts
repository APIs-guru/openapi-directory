import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=collectionOverrides", elemType: CollectionOverride })
  collectionOverrides?: CollectionOverride[];

  @SpeakeasyMetadata({ data: "json, name=credential" })
  credential?: Credential;

  @SpeakeasyMetadata({ data: "json, name=customCertificateAuthorityRoots" })
  customCertificateAuthorityRoots?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=descriptorUrl" })
  descriptorUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: TypeProviderLabelEntry })
  labels?: TypeProviderLabelEntry[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Options;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
