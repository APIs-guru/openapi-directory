import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlexTemplateRuntimeEnvironment } from "./flextemplateruntimeenvironment";
import { TemplateMetadata } from "./templatemetadata";
import { SDKInfo } from "./sdkinfo";



// ContainerSpec
/** 
 * Container Spec.
**/
export class ContainerSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultEnvironment" })
  defaultEnvironment?: FlexTemplateRuntimeEnvironment;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=imageRepositoryCertPath" })
  imageRepositoryCertPath?: string;

  @SpeakeasyMetadata({ data: "json, name=imageRepositoryPasswordSecretId" })
  imageRepositoryPasswordSecretId?: string;

  @SpeakeasyMetadata({ data: "json, name=imageRepositoryUsernameSecretId" })
  imageRepositoryUsernameSecretId?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: TemplateMetadata;

  @SpeakeasyMetadata({ data: "json, name=sdkInfo" })
  sdkInfo?: SDKInfo;
}
