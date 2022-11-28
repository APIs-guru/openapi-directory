import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectionOverride } from "./collectionoverride";
import { Credential } from "./credential";
import { Options } from "./options";



// BaseType
/** 
 * BaseType that describes a service-backed Type.
**/
export class BaseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionOverrides", elemType: CollectionOverride })
  collectionOverrides?: CollectionOverride[];

  @SpeakeasyMetadata({ data: "json, name=credential" })
  credential?: Credential;

  @SpeakeasyMetadata({ data: "json, name=descriptorUrl" })
  descriptorUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Options;
}
