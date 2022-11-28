import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResetAdminPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}
