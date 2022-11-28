import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProductModulePathParams extends SpeakeasyBase {
    productModuleNumber: string;
}
export declare enum UpdateProductModuleRequestBodyLicenseTemplateEnum {
    Timevolume = "TIMEVOLUME",
    Feature = "FEATURE"
}
export declare enum UpdateProductModuleRequestBodyNodeSecretModeEnum {
    Predefined = "PREDEFINED",
    Client = "CLIENT"
}
export declare class UpdateProductModuleRequestBody extends SpeakeasyBase {
    active?: boolean;
    licenseTemplate?: UpdateProductModuleRequestBodyLicenseTemplateEnum[];
    licensingModel?: string;
    maxCheckoutValidity?: number;
    name?: string;
    nodeSecretMode?: UpdateProductModuleRequestBodyNodeSecretModeEnum[];
    number?: string;
    redThreshold?: number;
    yellowThreshold?: number;
}
export declare class UpdateProductModuleSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class UpdateProductModuleRequest extends SpeakeasyBase {
    pathParams: UpdateProductModulePathParams;
    request?: UpdateProductModuleRequestBody;
    security: UpdateProductModuleSecurity;
}
export declare class UpdateProductModuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
