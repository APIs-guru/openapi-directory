import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SpotSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=setid" })
  setid?: number;

  @SpeakeasyMetadata({ data: "json, name=spot_id" })
  spotId?: string;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;
}
