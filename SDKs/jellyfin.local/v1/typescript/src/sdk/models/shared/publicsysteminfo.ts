import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PublicSystemInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LocalAddress" })
  localAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=StartupWizardCompleted" })
  startupWizardCompleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
