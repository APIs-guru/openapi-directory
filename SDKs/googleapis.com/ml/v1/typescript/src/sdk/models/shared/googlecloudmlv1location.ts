import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Capability } from "./googlecloudmlv1capability";



export class GoogleCloudMlV1Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities", elemType: GoogleCloudMlV1Capability })
  capabilities?: GoogleCloudMlV1Capability[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
