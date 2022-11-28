import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FinalizeDefaultLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;
}
