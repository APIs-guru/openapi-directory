import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeploymentsCancelPreviewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;
}
