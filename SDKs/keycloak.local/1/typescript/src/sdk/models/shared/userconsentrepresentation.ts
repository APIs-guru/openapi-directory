import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserConsentRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: number;

  @SpeakeasyMetadata({ data: "json, name=grantedClientScopes" })
  grantedClientScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: number;
}
