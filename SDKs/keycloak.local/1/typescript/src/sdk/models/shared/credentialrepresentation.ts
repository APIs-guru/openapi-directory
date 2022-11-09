import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CredentialRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdDate" })
  createdDate?: number;

  @Metadata({ data: "json, name=credentialData" })
  credentialData?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=secretData" })
  secretData?: string;

  @Metadata({ data: "json, name=temporary" })
  temporary?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=userLabel" })
  userLabel?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
