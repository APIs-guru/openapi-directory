import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EditGuaranteedOrderReadAccessorsRequest
/** 
 * Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors.
**/
export class EditGuaranteedOrderReadAccessorsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedAdvertisers" })
  addedAdvertisers?: string[];

  @Metadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @Metadata({ data: "json, name=readAccessInherited" })
  readAccessInherited?: boolean;

  @Metadata({ data: "json, name=removedAdvertisers" })
  removedAdvertisers?: string[];
}
