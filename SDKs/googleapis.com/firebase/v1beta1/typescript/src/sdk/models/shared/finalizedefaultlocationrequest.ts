import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FinalizeDefaultLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationId" })
  locationId?: string;
}
