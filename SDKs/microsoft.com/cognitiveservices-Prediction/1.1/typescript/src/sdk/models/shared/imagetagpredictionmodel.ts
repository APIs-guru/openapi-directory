import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageTagPredictionModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Probability" })
  probability?: number;

  @SpeakeasyMetadata({ data: "json, name=Tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=TagId" })
  tagId?: string;
}
