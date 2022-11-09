import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PublicSystemInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=LocalAddress" })
  localAddress?: string;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: string;

  @Metadata({ data: "json, name=ProductName" })
  productName?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=StartupWizardCompleted" })
  startupWizardCompleted?: boolean;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
