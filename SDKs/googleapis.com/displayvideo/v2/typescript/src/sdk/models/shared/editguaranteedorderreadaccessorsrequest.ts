import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EditGuaranteedOrderReadAccessorsRequest
/** 
 * Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors.
**/
export class EditGuaranteedOrderReadAccessorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addedAdvertisers" })
  addedAdvertisers?: string[];

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=readAccessInherited" })
  readAccessInherited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=removedAdvertisers" })
  removedAdvertisers?: string[];
}
