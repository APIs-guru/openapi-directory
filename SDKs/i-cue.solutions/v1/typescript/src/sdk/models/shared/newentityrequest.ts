import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewEntityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
