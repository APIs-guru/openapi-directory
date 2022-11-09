import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=gaiaId" })
  gaiaId?: string;
}
