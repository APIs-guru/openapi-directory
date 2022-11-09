import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CareContextRepresentation } from "./carecontextrepresentation";
import { IdentifierTypeEnum } from "./identifiertypeenum";


export class PatientRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContexts", elemType: shared.CareContextRepresentation })
  careContexts?: CareContextRepresentation[];

  @Metadata({ data: "json, name=display" })
  display: string;

  @Metadata({ data: "json, name=matchedBy" })
  matchedBy?: IdentifierTypeEnum[];

  @Metadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}
