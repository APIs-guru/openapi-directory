import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItemList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=list" })
  list?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sha1" })
  sha1?: string;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class ItemListInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;
}
