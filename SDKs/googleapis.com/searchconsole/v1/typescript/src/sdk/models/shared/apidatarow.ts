import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiDataRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clicks" })
  clicks?: number;

  @SpeakeasyMetadata({ data: "json, name=ctr" })
  ctr?: number;

  @SpeakeasyMetadata({ data: "json, name=impressions" })
  impressions?: number;

  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: string[];

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;
}
