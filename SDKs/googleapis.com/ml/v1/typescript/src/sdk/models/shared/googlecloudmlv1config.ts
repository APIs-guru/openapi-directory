import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudMlV1Config extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tpuServiceAccount" })
  tpuServiceAccount?: string;
}
