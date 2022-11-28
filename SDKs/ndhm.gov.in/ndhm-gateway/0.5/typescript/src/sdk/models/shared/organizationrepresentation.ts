import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrganizationRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
