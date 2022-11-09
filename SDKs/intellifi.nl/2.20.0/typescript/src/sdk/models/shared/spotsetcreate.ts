import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SpotSetCreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=setid" })
  setid?: number;

  @Metadata({ data: "json, name=spot_id" })
  spotId?: string;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;
}
