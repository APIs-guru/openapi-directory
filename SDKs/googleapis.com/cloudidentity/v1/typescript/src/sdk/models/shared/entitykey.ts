import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntityKey
/** 
 * A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
**/
export class EntityKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;
}
