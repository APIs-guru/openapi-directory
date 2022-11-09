import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1Capability } from "./googlecloudmlv1capability";


export class GoogleCloudMlV1Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilities", elemType: shared.GoogleCloudMlV1Capability })
  capabilities?: GoogleCloudMlV1Capability[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
