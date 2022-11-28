import { SpeakeasyBase } from "../../../internal/utils";
import { FlexTemplateRuntimeEnvironment } from "./flextemplateruntimeenvironment";
import { TemplateMetadata } from "./templatemetadata";
import { SDKInfo } from "./sdkinfo";
/**
 * Container Spec.
**/
export declare class ContainerSpec extends SpeakeasyBase {
    defaultEnvironment?: FlexTemplateRuntimeEnvironment;
    image?: string;
    imageRepositoryCertPath?: string;
    imageRepositoryPasswordSecretId?: string;
    imageRepositoryUsernameSecretId?: string;
    metadata?: TemplateMetadata;
    sdkInfo?: SDKInfo;
}
