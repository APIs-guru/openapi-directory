import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Organization extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
