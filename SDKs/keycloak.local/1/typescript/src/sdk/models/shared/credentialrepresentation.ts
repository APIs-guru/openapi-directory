import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CredentialRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: number;

  @SpeakeasyMetadata({ data: "json, name=credentialData" })
  credentialData?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=secretData" })
  secretData?: string;

  @SpeakeasyMetadata({ data: "json, name=temporary" })
  temporary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=userLabel" })
  userLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
