import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageTagPrediction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Probability" })
  probability?: number;

  @Metadata({ data: "json, name=Tag" })
  tag?: string;

  @Metadata({ data: "json, name=TagId" })
  tagId?: string;
}
