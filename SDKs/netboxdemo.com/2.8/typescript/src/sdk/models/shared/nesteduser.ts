import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NestedUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=username" })
  username: string;
}
