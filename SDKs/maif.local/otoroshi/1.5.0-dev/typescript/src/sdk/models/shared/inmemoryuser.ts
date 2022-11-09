import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InMemoryUser
/** 
 * A user
**/
export class InMemoryUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=password" })
  password: string;
}
