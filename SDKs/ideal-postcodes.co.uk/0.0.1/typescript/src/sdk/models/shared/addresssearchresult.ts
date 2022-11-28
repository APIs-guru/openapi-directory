import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



export class AddressSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hits", elemType: Address })
  hits?: Address[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
