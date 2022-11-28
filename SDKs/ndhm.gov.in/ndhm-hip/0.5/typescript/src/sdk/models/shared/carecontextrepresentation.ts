import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CareContextRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display" })
  display: string;

  @SpeakeasyMetadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}
