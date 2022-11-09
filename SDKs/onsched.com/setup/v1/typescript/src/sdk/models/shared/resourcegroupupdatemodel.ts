import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResourceGroupUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
