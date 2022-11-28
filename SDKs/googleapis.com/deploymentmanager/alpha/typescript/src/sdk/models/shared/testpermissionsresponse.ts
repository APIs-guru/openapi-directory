import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
