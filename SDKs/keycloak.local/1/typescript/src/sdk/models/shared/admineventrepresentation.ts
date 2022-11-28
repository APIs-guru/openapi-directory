import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthDetailsRepresentation } from "./authdetailsrepresentation";



export class AdminEventRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authDetails" })
  authDetails?: AuthDetailsRepresentation;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=operationType" })
  operationType?: string;

  @SpeakeasyMetadata({ data: "json, name=realmId" })
  realmId?: string;

  @SpeakeasyMetadata({ data: "json, name=representation" })
  representation?: string;

  @SpeakeasyMetadata({ data: "json, name=resourcePath" })
  resourcePath?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;
}
