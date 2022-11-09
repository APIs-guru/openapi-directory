import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScopeMappingRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=client" })
  client?: string;

  @Metadata({ data: "json, name=clientScope" })
  clientScope?: string;

  @Metadata({ data: "json, name=roles" })
  roles?: string[];

  @Metadata({ data: "json, name=self" })
  self?: string;
}
