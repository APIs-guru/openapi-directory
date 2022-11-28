import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OfferingMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;

  @SpeakeasyMetadata({ data: "json, name=rootContentId" })
  rootContentId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
