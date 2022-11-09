import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResponsePolicyGkeCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=gkeClusterName" })
  gkeClusterName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
