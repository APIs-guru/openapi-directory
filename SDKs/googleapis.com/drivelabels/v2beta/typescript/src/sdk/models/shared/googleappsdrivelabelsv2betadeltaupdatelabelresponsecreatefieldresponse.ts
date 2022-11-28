import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse
/** 
 * Response following Field create.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;
}
