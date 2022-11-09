import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CareContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}
