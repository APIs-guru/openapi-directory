import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableAggregateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=date_added" })
  dateAdded?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix: string;

  @SpeakeasyMetadata({ data: "json, name=rir" })
  rir: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
