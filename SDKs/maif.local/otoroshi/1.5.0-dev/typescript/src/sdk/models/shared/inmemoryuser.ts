import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InMemoryUser
/** 
 * A user
**/
export class InMemoryUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
