import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudMlV1Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=tpuServiceAccount" })
  tpuServiceAccount?: string;
}
