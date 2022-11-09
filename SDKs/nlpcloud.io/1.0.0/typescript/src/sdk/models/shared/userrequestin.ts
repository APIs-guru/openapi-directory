import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserRequestIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: string;
}
