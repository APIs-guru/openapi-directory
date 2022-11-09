import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResetAdminPasswordResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;
}
