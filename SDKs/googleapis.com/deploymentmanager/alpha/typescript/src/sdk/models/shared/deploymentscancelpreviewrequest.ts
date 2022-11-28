import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeploymentsCancelPreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;
}
