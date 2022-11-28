import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
