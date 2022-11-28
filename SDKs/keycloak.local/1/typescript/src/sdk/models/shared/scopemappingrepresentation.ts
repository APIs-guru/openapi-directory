import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScopeMappingRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=clientScope" })
  clientScope?: string;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: string[];

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}
