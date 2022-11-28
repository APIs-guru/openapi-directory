import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeploymentsStopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;
}
