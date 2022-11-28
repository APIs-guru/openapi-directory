import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CareContextRepresentation } from "./carecontextrepresentation";
import { IdentifierTypeEnum } from "./identifiertypeenum";



export class PatientRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContexts", elemType: CareContextRepresentation })
  careContexts: CareContextRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=display" })
  display: string;

  @SpeakeasyMetadata({ data: "json, name=matchedBy" })
  matchedBy?: IdentifierTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}
