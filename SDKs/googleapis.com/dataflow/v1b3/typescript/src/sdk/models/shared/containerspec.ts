import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlexTemplateRuntimeEnvironment } from "./flextemplateruntimeenvironment";
import { TemplateMetadata } from "./templatemetadata";
import { SdkInfo } from "./sdkinfo";


// ContainerSpec
/** 
 * Container Spec.
**/
export class ContainerSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultEnvironment" })
  defaultEnvironment?: FlexTemplateRuntimeEnvironment;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=imageRepositoryCertPath" })
  imageRepositoryCertPath?: string;

  @Metadata({ data: "json, name=imageRepositoryPasswordSecretId" })
  imageRepositoryPasswordSecretId?: string;

  @Metadata({ data: "json, name=imageRepositoryUsernameSecretId" })
  imageRepositoryUsernameSecretId?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: TemplateMetadata;

  @Metadata({ data: "json, name=sdkInfo" })
  sdkInfo?: SdkInfo;
}
