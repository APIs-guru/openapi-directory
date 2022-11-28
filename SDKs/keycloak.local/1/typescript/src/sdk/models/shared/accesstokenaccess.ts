import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessTokenAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: string[];

  @SpeakeasyMetadata({ data: "json, name=verify_caller" })
  verifyCaller?: boolean;
}
