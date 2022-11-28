import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class LocationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;
}
