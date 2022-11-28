import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NestedClusterType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster_count" })
  clusterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
