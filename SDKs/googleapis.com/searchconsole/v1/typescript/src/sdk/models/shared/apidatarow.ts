import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiDataRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=clicks" })
  clicks?: number;

  @Metadata({ data: "json, name=ctr" })
  ctr?: number;

  @Metadata({ data: "json, name=impressions" })
  impressions?: number;

  @Metadata({ data: "json, name=keys" })
  keys?: string[];

  @Metadata({ data: "json, name=position" })
  position?: number;
}
