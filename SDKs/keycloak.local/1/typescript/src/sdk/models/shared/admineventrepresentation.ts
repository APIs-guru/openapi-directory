import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthDetailsRepresentation } from "./authdetailsrepresentation";


export class AdminEventRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=authDetails" })
  authDetails?: AuthDetailsRepresentation;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=operationType" })
  operationType?: string;

  @Metadata({ data: "json, name=realmId" })
  realmId?: string;

  @Metadata({ data: "json, name=representation" })
  representation?: string;

  @Metadata({ data: "json, name=resourcePath" })
  resourcePath?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=time" })
  time?: number;
}
