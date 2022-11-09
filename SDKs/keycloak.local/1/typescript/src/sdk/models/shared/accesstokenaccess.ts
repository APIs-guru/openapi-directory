import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessTokenAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=roles" })
  roles?: string[];

  @Metadata({ data: "json, name=verify_caller" })
  verifyCaller?: boolean;
}
