import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";


export class AddressSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=hits", elemType: shared.Address })
  hits?: Address[];

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
