import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GSuitePrincipal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gsuiteDomain" })
  gsuiteDomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gsuiteGroupEmail" })
  gsuiteGroupEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=gsuiteUserEmail" })
  gsuiteUserEmail?: string;
}
