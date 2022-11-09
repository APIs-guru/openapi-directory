import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CollectionOverride } from "./collectionoverride";
import { Credential } from "./credential";
import { Options } from "./options";


// BaseType
/** 
 * BaseType that describes a service-backed Type.
**/
export class BaseType extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionOverrides", elemType: shared.CollectionOverride })
  collectionOverrides?: CollectionOverride[];

  @Metadata({ data: "json, name=credential" })
  credential?: Credential;

  @Metadata({ data: "json, name=descriptorUrl" })
  descriptorUrl?: string;

  @Metadata({ data: "json, name=options" })
  options?: Options;
}
