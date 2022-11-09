import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EntityKey
/** 
 * A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
**/
export class EntityKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;
}
