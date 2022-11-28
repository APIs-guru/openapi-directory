import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_read_only" })
  isReadOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}


export class Key extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_read_only" })
  isReadOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
