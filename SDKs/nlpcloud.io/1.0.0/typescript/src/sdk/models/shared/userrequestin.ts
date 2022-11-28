import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserRequestIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
