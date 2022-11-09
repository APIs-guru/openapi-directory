import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrganizationRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}
