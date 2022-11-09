import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserConsentRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: number;

  @Metadata({ data: "json, name=grantedClientScopes" })
  grantedClientScopes?: string[];

  @Metadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: number;
}
