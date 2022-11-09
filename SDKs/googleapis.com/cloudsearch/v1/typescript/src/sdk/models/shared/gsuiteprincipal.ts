import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GSuitePrincipal extends SpeakeasyBase {
  @Metadata({ data: "json, name=gsuiteDomain" })
  gsuiteDomain?: boolean;

  @Metadata({ data: "json, name=gsuiteGroupEmail" })
  gsuiteGroupEmail?: string;

  @Metadata({ data: "json, name=gsuiteUserEmail" })
  gsuiteUserEmail?: string;
}
