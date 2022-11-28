import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResponsePolicyGkeCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gkeClusterName" })
  gkeClusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
