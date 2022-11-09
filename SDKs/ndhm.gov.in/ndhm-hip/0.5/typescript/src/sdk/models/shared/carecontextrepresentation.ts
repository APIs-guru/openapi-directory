import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CareContextRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=display" })
  display: string;

  @Metadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}
