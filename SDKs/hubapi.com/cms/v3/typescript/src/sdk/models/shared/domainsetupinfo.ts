import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DomainSetupInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=supportsSslExternally" })
  supportsSslExternally: boolean;

  @Metadata({ data: "json, name=whoIsEmailAddresses" })
  whoIsEmailAddresses: string[];
}
