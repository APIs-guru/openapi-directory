import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CareContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}
