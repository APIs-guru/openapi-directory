import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NestedUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
